import React from "react";
import BiographyBasicInfo from "./BiographyBasicInfo";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import "./ScreenEditor.css"
import BiographyContactInfo from "./BiographyContactInfo";
import Summary from "./Summary";

function ScreenEditor(props) {
  return (
    <Box className="screen-editor">
      <Grid>
        <h2>Basic Information</h2>
        <BiographyBasicInfo props={props}/>
        <h2>Contact Information</h2>
        <BiographyContactInfo />
        <h2>Summary</h2>
        <Summary />
      </Grid>
    </Box>
  );
}

export default ScreenEditor;
