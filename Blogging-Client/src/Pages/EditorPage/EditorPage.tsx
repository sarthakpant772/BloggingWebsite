import { Box, Modal, Typography } from "@mui/material";
import { FC, useState } from "react";
import MarkDownInput from "../../component/organisms/MarkDownInput/MarkDownInput";
import MarkDownOutput from "../../component/organisms/MarkDownOutput/MarkDownOutput";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { modalState } from "../../features/Editor/EditorSlice";
import { Font } from "../../Constants/Fonts";
import Button from "../../component/atoms/Button";
import FireBase from "../../Firebase/FirebaseSDK";
import { v4 as uuid } from "uuid/";
interface IBlogData {
  title: string;
  content: string;
  description: string;
}

const EditorPage: FC = () => {
  const open = useSelector((state: RootState) => state.editor.open);
  const content = useSelector((state: RootState) => state.editor.text);

  const [blogData, setBlogData] = useState<IBlogData>({
    title: "",
    content: "",
    description: "",
  });
  const [pin, setPIN] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(modalState());
    setBlogData({ ...blogData, content: content });
  };

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
            marginTop: { xs: "1em", lg: "0" },
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
          <MarkDownOutput />
        </Box>
      </Box>
      <Modal
        open={open}
        onClose={() => dispatch(modalState())}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "50%",
            height: "30%",
            borderRadius: "10px",
            backgroundColor: "common.white",
            borderTopWidth: "2px", // Different border widths for each side
            borderRightWidth: "4px",
            borderBottomWidth: "4px",
            borderLeftWidth: "2px",
            borderColor: "black", // Border color
            borderStyle: "solid",
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "95%", display: "flex", flexDirection: "column" }}>
            <Typography variant="subtitle1">Title of Blog</Typography>
            <input
              style={{
                width: "100%",
                height: "3em",
                fontFamily: Font.REGULAR,
                fontSize: "1rem",
              }}
              value={blogData.title}
              onChange={(e) => {
                setBlogData({ ...blogData, title: e.target.value });
              }}
            />
          </Box>
          <Box sx={{ width: "95%", display: "flex", flexDirection: "column" }}>
            <Typography variant="subtitle1">Description</Typography>
            <textarea
              style={{
                width: "100%",
                height: "6em",
                fontFamily: Font.REGULAR,
                fontSize: "1rem",
              }}
              value={blogData.description}
              onChange={(e) => {
                setBlogData({ ...blogData, description: e.target.value });
              }}
            />
          </Box>
          <Box sx={{ width: "95%", display: "flex", flexDirection: "column" }}>
            <Typography variant="subtitle1">Add Dev Pin</Typography>
            <input
              type="password"
              style={{
                width: "100%",
                height: "3em",
                fontFamily: Font.REGULAR,
                fontSize: "1rem",
              }}
              value={blogData.title}
              onChange={(e) => {
                setPIN(e.target.value);
              }}
            />
          </Box>
          <Box
            sx={{
              width: "95%",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              marginTop: "1em",
            }}
          >
            <Box sx={{ width: "7em", height: "95%", alignItems: "center" }}>
              <Button ButtonName="SUBMIT" ButtonFunction={handleSubmit} />
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default EditorPage;
