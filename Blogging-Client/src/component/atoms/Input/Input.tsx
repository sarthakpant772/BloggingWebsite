import { Box } from "@mui/material";
import React, { ChangeEvent, FC, useState } from "react";
import { useDispatch } from "react-redux";
import { edit } from "../../../features/Editor/EditorSlice";

const Input: FC = () => {
  const [markdown, setMarkdown] = useState<string>();
  const dispatch = useDispatch();
  const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(e.target.value);
    dispatch(edit(e.target.value));
  };

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <textarea
        style={{ width: "100%", height: "100%" }}
        onChange={handleOnChange}
        value={markdown}
      />
    </Box>
  );
};

export default Input;
