import { Box, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import tsx from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import typescript from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import scss from "react-syntax-highlighter/dist/cjs/languages/prism/scss";
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash";
import markdown from "react-syntax-highlighter/dist/cjs/languages/prism/markdown";
import json from "react-syntax-highlighter/dist/cjs/languages/prism/json";

SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("scss", scss);
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("markdown", markdown);
SyntaxHighlighter.registerLanguage("json", json);
import rangeParser from "parse-numeric-range";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import rehypeRaw from "rehype-raw";
import { useParams } from "react-router-dom";
import axios from "axios";

const syntaxTheme = oneDark;

const MarkdownComponents: object = {
  code({ node, inline, className, ...props }) {
    const hasLang = /language-(\w+)/.exec(className || "");
    const hasMeta = node?.data?.meta;

    const applyHighlights: object = (applyHighlights: number) => {
      if (hasMeta) {
        const RE = /{([\d,-]+)}/;
        const metadata = node.data.meta?.replace(/\s/g, "");
        const strlineNumbers = RE?.test(metadata) ? RE?.exec(metadata)[1] : "0";
        const highlightLines = rangeParser(strlineNumbers);
        const highlight = highlightLines;
        const data: string = highlight.includes(applyHighlights)
          ? "highlight"
          : null;
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
        wrapLines={hasMeta}
        useInlineStyles={true}
        lineProps={applyHighlights}
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
  const [dataset, setDataset] = useState<IDataset>({});

  const { id } = useParams();

  const getData = async () => {
    try {
      const res = await axios.get(
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
  }, []);

  return (
    <Box
      sx={{
        height: "100%",
        width: "95%",
        display: "flex",
        borderRadius: "10px",
        borderTopWidth: "2px", // Different border widths for each side
        borderRightWidth: "4px",
        borderBottomWidth: "4px",
        borderLeftWidth: "2px",
        borderColor: "black", // Border color
        borderStyle: "solid",
        boxShadow:
          "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "90%", height: "100%" }}>
        <Typography variant="h4">{dataset.title}</Typography>
        <ReactMarkdown
          components={MarkdownComponents}
          rehypePlugins={[rehypeRaw]}
        >
          {dataset.content}
        </ReactMarkdown>
      </Box>
    </Box>
  );
};

export default ShowSingleBlog;
