import { Box } from "@mui/material";
import NavBar from "./component/organisms/NavBar";
import HomePage from "./Pages/HomePage/HomePage";
import { FC } from "react";
import EditorPage from "./Pages/EditorPage";

const App: FC = () => {
  return (
    <Box>
      <NavBar />
      <EditorPage />
    </Box>
  );
};

export default App;
