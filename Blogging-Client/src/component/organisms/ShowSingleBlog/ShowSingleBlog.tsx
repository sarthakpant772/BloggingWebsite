import { Box } from "@mui/material";
import { FC } from "react";
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

const ShowSingleBlog: FC = () => {
  const markdown = `
## DSC_ML

> 👩🏻‍💻  This repository is a task given by  . And this repository is created by  [Sarthak Pant](https://github.com/sarthakpant772)

![scikit_learn](https://img.shields.io/badge/scikit_learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white)
![Python](https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=darkgreen)
![Pandas](https://img.shields.io/badge/Pandas-2C2D72?style=for-the-badge&logo=pandas&logoColor=whit)

### Setup & Installation

### To Contribute

- Please [create a pull request](https://github.com/sarthakpant772/DSC_ML/pulls) so the main code is still up and running

- For more features or in case of any bugs, [raise an issue](https://github.com/sarthakpant772/DSC_ML/issues).

## About the dataset
<img src="https://thesaudiexpat.com/wp-content/uploads/2018/10/annual-leave1.png" width=90%  />

 - This dataset gives us information about whether a person leaves his or her job based on some parameters.
 - [Download the dataset](https://www.kaggle.com/manasdalakoti/univai-hack-data)

## Reach out

[@sarthakpant:](https://github.com/sarthakpant772)
[![Twitter](https://user-images.githubusercontent.com/26264600/88994487-151cad00-d31b-11ea-8795-da01dd1f29d7.png)](https://twitter.com/1SarthakPant)
[![LinkedIn](https://user-images.githubusercontent.com/26264600/88994287-99226500-d31a-11ea-9a80-a91afd654777.png)](https://www.linkedin.com/in/sarthak-pant-8844521b7/)
`;

  return (
    <Box
      sx={{
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
      <Box sx={{ width: "90%" }}>
        <ReactMarkdown
          components={MarkdownComponents}
          rehypePlugins={[rehypeRaw]}
        >
          {markdown}
        </ReactMarkdown>
      </Box>
    </Box>
  );
};

export default ShowSingleBlog;
