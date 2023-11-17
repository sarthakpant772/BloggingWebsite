// Your component file

import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { navMap } from "../../../Constants/ConstantName";

interface NavProps {
  name: string;
}

const NavButton: React.FC<NavProps> = (props) => {
  return (
    <Box sx={{ height: "2em", minWidth: "6em" }}>
      <Link to={navMap[props.name]}>
        <button
          style={{
            background: "none",
            borderRadius: "4px",
            borderWidth: "1px 4px 4px 1px",
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
          }}
        >
          <Typography variant="subtitle1">{props.name}</Typography>
        </button>
      </Link>
    </Box>
  );
};

export default NavButton;
