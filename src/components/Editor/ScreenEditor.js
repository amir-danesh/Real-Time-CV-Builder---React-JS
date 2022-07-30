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
        <BiographyBasicInfo
          userData={props.userData.basicInfo}
          setUserData={props.setUserData}
        />
        <h2>Contact Information</h2>
        <BiographyContactInfo
          userData={props.userData.contactInfo}
          setUserData={props.setUserData}
        />
        <h2>Summary</h2>
        <Summary
          userData={props.userData.summary}
          setUserData={props.setUserData}
        />
      </Grid>
    </Box>
  );
}

export default ScreenEditor;
