import { Box, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";

interface CardsDetails {
  _id: string;
  createdAt: string;
  title: string;
  description: string;
}

const Card = (props: CardsDetails) => {
  const navigate = useNavigate();

  const convertDateToAgo = (createdAt: string) => {
    try {
      const date = new Date(createdAt);

      // Check if the date is valid
      if (isNaN(date.getTime())) {
        throw new Error("Invalid date");
      }

      return formatDistanceToNow(date, { addSuffix: true });
    } catch (error) {
      console.error("Error converting date:", error);
      return "Invalid date";
    }
  };

  // TODO add navigation to new page
  const handleClick = () => {
    console.log(props);
    navigate(`/${props._id}`);
  };

  return (
    <Box
      sx={{
        marginTop: "0.5em",
        marginBottom: "0.5em",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button
        onClick={handleClick}
        style={{
          width: "100%",
          minHeight: "4em",
          minWidth: "7em",
          background: "none",
          borderRadius: "10px",
          borderWidth: "1px 4px 4px 1px",
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: "90%", minHeight: "2em", display: "flex" }}>
          <Typography variant="subtitle1">
            {convertDateToAgo(props.createdAt)}
          </Typography>
        </Box>
        <Box sx={{ width: "90%", minHeight: "4em", display: "flex" }}>
          <Typography variant="h4">{props.title}</Typography>
        </Box>
        <Box sx={{ width: "90%", minHeight: "6em", display: "flex" }}>
          <Typography variant="subtitle2">{props.description}</Typography>
        </Box>
      </button>
    </Box>
  );
};

export default Card;
