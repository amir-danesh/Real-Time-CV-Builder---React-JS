import React from "react";
import ScreenEditor from "./Editor/ScreenEditor";
import ScreenViewer from "./Viewer/ScreenViewer";
import "./Main.css";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";

function Main() {
  return (
    <Box className="all-content">
      <ScreenEditor />
      <ScreenViewer />
    </Box>
  );
}

export default Main;
