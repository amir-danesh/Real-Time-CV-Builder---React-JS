import React, { useState } from "react";
import ScreenEditor from "./Editor/ScreenEditor";
import ScreenViewer from "./Viewer/ScreenViewer";
import "./Main.css";
import { Box } from "@mui/material";

function Main() {
  // Variables and Functions related to BiographyBasicInfo.js

  const [userData, setUserData] = useState({
    basicInfo: {
      firstName: "",
      lastName: "",
      jobTitle: "",
      gender: "",
      maritalStatus: "",
      militaryStatus: "",
      yearDOB: 2022,
      monthDOB: "January",
      dayDOB: 1,
    },
    contactInfo: {
      email: "",
      phoneNumber: "",
      homeNumber: "",
      website: "",
      country: {label:"United States", value:"US"},
      city: "",
    },
    summary: {
      summary: ""
    },
  });

  return (
    <Box className="all-content">
      <ScreenEditor
        userData={userData}
        setUserData={setUserData}
      />
      <ScreenViewer />
    </Box>
  );
}

export default Main;
