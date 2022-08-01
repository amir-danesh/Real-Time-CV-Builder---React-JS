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
      yearDOB: "", // Dont delete value
      monthDOB: "", // Dont delete value
      dayDOB: "", // Dont delete value
    },
    contactInfo: {
      email: "",
      phoneNumber: "",
      homeNumber: "",
      website: "",
      country: null, // Dont delete value
      city: "",
    },
    summary: {
      summary: "",
    },
  });

  return (
    <Box className="all-content">
      <ScreenEditor userData={userData} setUserData={setUserData} />
      <ScreenViewer userData={userData} />
    </Box>
  );
}

export default Main;
