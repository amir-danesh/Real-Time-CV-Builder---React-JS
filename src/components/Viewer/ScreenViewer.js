import React from "react";
import "./ScreenViewer.css";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import SimpleBlackWhite from "./templates/SimpleBlackWhite";

function ScreenViewer(props) {
  return (
    <Box className="screen">
      <Grid>
        <SimpleBlackWhite userData={props.userData}/>
      </Grid>
    </Box>
  );
}

export default ScreenViewer;
