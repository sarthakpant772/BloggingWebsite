import { Box } from "@mui/material";
import React, { FC } from "react";
import SkillButton from "../../atoms/SkillButton";
import rehypeRaw from "rehype-raw";
import ReactMarkdown from "react-markdown";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import rangeParser from "parse-numeric-range"; // Import rangeParser

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
      >
        {props.children}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props} />
    );
  },
};

const MarkDownOutput: FC = () => {
  const markdownText = useSelector((state: RootState) => state.editor.text);
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "95%",
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <SkillButton name="YourOutput" />
      </Box>

      <Box
        sx={{
          width: "90%",
          height: "90%",
          overflowY: "scroll",
          WebkitOverflowScrolling: "touch",
          WebkitScrollSnapType: "hidden",
          "&::-webkit-scrollbar": {
            display: "none", // Hide the scrollbar in WebKit browsers
          },
        }}
      >
        <ReactMarkdown
          components={MarkdownComponents}
          rehypePlugins={[rehypeRaw]}
        >
          {markdownText}
        </ReactMarkdown>
      </Box>
    </Box>
  );
};

export default MarkDownOutput;
