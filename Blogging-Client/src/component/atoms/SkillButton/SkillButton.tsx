import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { images } from "../../../Constants/Image";
import { socialMediaMap } from "../../../Constants/ConstantName";

interface SkillProps {
  name: string;
}

const SkillButton: FC<SkillProps> = (props) => {
  return (
    <Box
      sx={{
        minWidth: "7em",
        height: "3em",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <a
        href={socialMediaMap[props.name]}
        style={{
          width: "100%",
          height: "90%",
        }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          style={{
            width: "100%",
            height: "90%",
            display: "flex",
            background: "none",
            borderRadius: "4px",
            borderWidth: "1px 4px 4px 1px",
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "none",
          }}
        >
          <Box
            component="img"
            src={images[props.name]}
            sx={{ height: "inherit" }}
          />
          <Typography variant="subtitle1">{props.name}</Typography>
        </button>
      </a>
    </Box>
  );
};

export default SkillButton;
