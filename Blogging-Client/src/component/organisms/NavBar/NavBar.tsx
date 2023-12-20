import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import logo from "../../../assets/myLOGO.png";
import NavButton from "../../atoms/NavButton";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import { Link } from "react-router-dom";

// TODO add transion in mobile view rest is all good :)
const NavBar: React.FC = () => {
  const [dropDown, setDropDown] = useState(false);
  const navHeadding: string[] = ["All Blog", "Blog Editor"];

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          width: "100%",
          height: "4em",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          transition: "background-color 0.5s ease-in-out", // Add a smooth transition for background-color
        }}
      >
        {/* Image */}
        {/* TODO Add navigation */}
        <Box sx={{ height: "90%" }}>
          <Button sx={{ height: "100%" }} component={Link} to="/">
            <Box component="img" src={logo} sx={{ height: "inherit" }} />
          </Button>
        </Box>
        {/* buttons */}
        <Box
          sx={{
            minWidth: "40%",
            display: { xs: "none", md: "flex" },
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          {navHeadding.map((x) => (
            <NavButton name={x} key={x} />
          ))}
        </Box>
        <Box sx={{ height: "90%", display: { xs: "flex", md: "none" } }}>
          <Button
            sx={{ height: "100%" }}
            onClick={() => setDropDown(!dropDown)}
          >
            <ViewHeadlineIcon sx={{ color: `primary.main` }} />
          </Button>
        </Box>
      </Box>

      {dropDown ? (
        <Box
          sx={{
            marginRight: "2em",
            display: "flex",
            justifyContent: "flex-start",
            backgroundColor: "primary.light",
            flexDirection: "column",
            alignItems: "flex-end",
            transition: "margin-right 0.5s ease-in-out", // Add a smooth transition for margin-right
          }}
        >
          {navHeadding.map((x) => (
            <Box
              sx={{
                marginTop: ".5em",
                marginBottom: ".5em",
                transitionDelay: "1s",
              }}
              key={x}
            >
              <NavButton name={x} />
            </Box>
          ))}
        </Box>
      ) : null}
    </Box>
  );
};

export default NavBar;
