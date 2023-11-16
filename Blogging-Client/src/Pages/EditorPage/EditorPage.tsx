import { Box } from "@mui/material";
import { FC } from "react";
import MarkDownInput from "../../component/organisms/MarkDownInput/MarkDownInput";
import MarkDownOutput from "../../component/organisms/MarkDownOutput/MarkDownOutput";

const EditorPage: FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "95%",
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* input */}
        <Box
          sx={{
            width: { xs: "100%", lg: "47%" },
            height: "90vh",
            borderRadius: "10px",
            borderTopWidth: "2px", // Different border widths for each side
            borderRightWidth: "4px",
            borderBottomWidth: "4px",
            borderLeftWidth: "2px",
            borderColor: "black", // Border color
            borderStyle: "solid",
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
          }}
        >
          <MarkDownInput />
        </Box>
        {/* output */}
        <Box
          sx={{
            width: "47%",
            height: "90vh",
            borderRadius: "10px",
            borderTopWidth: "2px", // Different border widths for each side
            borderRightWidth: "4px",
            borderBottomWidth: "4px",
            borderLeftWidth: "2px",
            borderColor: "black", // Border color
            borderStyle: "solid",
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
          }}
        >
          <MarkDownOutput />
        </Box>
      </Box>
    </Box>
  );
};

export default EditorPage;
