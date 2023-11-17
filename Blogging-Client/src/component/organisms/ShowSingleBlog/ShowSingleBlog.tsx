import { Box, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import rehypeRaw from "rehype-raw";
import gfm from "remark-gfm"; // Import remark-gfm
import { useParams } from "react-router-dom";
import axios from "axios";
import rangeParser from "parse-numeric-range";

const syntaxTheme = oneDark;

interface MetadataProps {
  meta?: string;
}

interface MarkdownComponentsProps {
  node?: {
    data?: MetadataProps;
  };
  className: string;
  children: string;
}

const MarkdownComponents: Record<string, React.FC<MarkdownComponentsProps>> = {
  code({ node, className, ...props }) {
    const hasLang = /language-(\w+)/.exec(className || "");
    const hasMeta = node?.data?.meta;

    const applyHighlights: object = (applyHighlights: number) => {
      if (hasMeta) {
        const RE = /{([\d,-]+)}/;
        const metadata = node.data?.meta?.replace(/\s/g, "") || "";
        const match = RE?.exec(metadata);
        const strlineNumbers = match ? match[1] : "0";
        const highlightLines = rangeParser(strlineNumbers);
        const highlight = highlightLines;
        const data: string = highlight.includes(applyHighlights)
          ? "highlight"
          : "";
        return { data };
      } else {
        return {};
      }
    };

    return hasLang ? (
      <SyntaxHighlighter
        style={syntaxTheme}
        language={hasLang[1]}
        PreTag="div"
        className="codeStyle"
        showLineNumbers={true}
        wrapLines={Boolean(hasMeta)} // Convert hasMeta to boolean
        useInlineStyles={true}
        lineProps={applyHighlights}
        codeTagProps={{ style: { backgroundColor: "#f4f4f4", padding: "8px" } }} // Add background color and padding
      >
        {props.children}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props} />
    );
  },
};

interface IDataset {
  title: string;
  content: string;
}

const ShowSingleBlog: FC = () => {
  const [dataset, setDataset] = useState<IDataset | null>(null);

  const { id } = useParams<{ id: string }>();

  const getData = async () => {
    try {
      const res = await axios.get<IDataset>(
        `https://blogging-website-wine.vercel.app/blog/getBlogById/${id}`
      );
      console.log(res.data);
      setDataset(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  if (!dataset) {
    return <div>Loading...</div>;
  }

  return (
    <Box
      sx={{
        height: "100%",
        width: "95%",
        display: "flex",
        borderRadius: "10px",
        borderTopWidth: "2px",
        borderRightWidth: "4px",
        borderBottomWidth: "4px",
        borderLeftWidth: "2px",
        borderColor: "black",
        borderStyle: "solid",
        boxShadow:
          "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflowY: "scroll",
      }}
    >
      <Box sx={{ width: "90%", height: "100%" }}>
        <Typography variant="h4">{dataset.title}</Typography>
        <ReactMarkdown
          components={MarkdownComponents}
          rehypePlugins={[rehypeRaw, gfm]} // Include gfm here
        >
          {dataset.content}
        </ReactMarkdown>
      </Box>
    </Box>
  );
};

export default ShowSingleBlog;
