import { Box } from "@mui/material";
import NavBar from "./component/organisms/NavBar";
import HomePage from "./Pages/HomePage/HomePage";
import { FC } from "react";
import EditorPage from "./Pages/EditorPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShowAllBlog from "./component/organisms/ShowAllBlog";
import ShowSingleBlog from "./component/organisms/ShowSingleBlog/ShowSingleBlog";

const App: FC = () => {
  return (
    <Box>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route index path="/" element={<ShowAllBlog />} />
            <Route path="/:id" element={<ShowSingleBlog />} />
          </Route>
          <Route path="/editor" element={<EditorPage />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
};

export default App;
