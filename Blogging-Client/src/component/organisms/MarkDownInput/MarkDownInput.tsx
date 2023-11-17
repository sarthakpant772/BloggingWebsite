import { Box } from "@mui/material";
import  { FC } from "react";
import SkillButton from "../../atoms/SkillButton";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import { useDispatch } from "react-redux";
import { modalState } from "../../../features/Editor/EditorSlice";

const MarkDownInput: FC = () => {
  const dispatch = useDispatch();
  const handleSubmit = () => {
    console.log("submitted");
    dispatch(modalState());
  };
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
        <SkillButton name="YourBlog.md" />
      </Box>

      <Box sx={{ marginTop: "1em", width: "95%", height: "90%" }}>
        <Input />
      </Box>
      <Box
        sx={{
          marginTop: "1em",
          marginBottom: "0.5em",
          width: "95%",
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <Box sx={{ width: "7em", height: "95%", alignItems: "center" }}>
          <Button ButtonName="SUBMIT" ButtonFunction={handleSubmit} />
        </Box>
      </Box>
    </Box>
  );
};

export default MarkDownInput;
