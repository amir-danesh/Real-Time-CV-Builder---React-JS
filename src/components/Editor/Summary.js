import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import "./Summary.css";
import Snackbar from "@mui/material/Snackbar";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";

function Summary(props) {
  const [progress, setProgress] = React.useState(0);
  const [openSummarySnackBar, setOpenSummarySnackBar] = useState(false);
  const summaryCharacterLimit = 200;
  const snackBarMessage =
    "Your summary should have less than " +
    props.summaryCharacterLimit +
    " characters.";

  const handleSummaryChange = (value, field) => {
    props.setUserData((prevState) => {
      return {
        ...prevState,
        summary: { ...prevState.summary, [field]: value },
      };
    });
  };

  const handleSummarySnackBar = (value) => {
    setOpenSummarySnackBar(value);
  };

  const handleSummary = (event) => {
    if (props.userData.summary.length >= summaryCharacterLimit) {
      handleSummarySnackBar(true);
      handleSummaryChange(props.userData.summary.slice(0, -1), "summary");
    } else {
      handleSummaryChange(event.target.value, "summary");
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    handleSummarySnackBar(false);
  };

  useEffect(() => {
    setProgress(
      parseInt((props.userData.summary.length / summaryCharacterLimit) * 100)
    );
  }, [props.userData.summary]);

  const LinearProgressWithLabel = () => {
    return (
      <div
        style={{
          width: "90%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ width: "90%", marginTop: "10px" }}>
          <LinearProgress variant="determinate" value={progress} />
        </Box>
        <Box sx={{ minWidth: 35, marginTop: "10px" }}>
          <Typography
            variant="body2"
            color="text.secondary"
          >{`${props.userData.summary.length} / ${summaryCharacterLimit}`}</Typography>
        </Box>
      </div>
    );
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <TextField
        className="summary"
        id="filled-multiline-flexible"
        label="Summary of your CV"
        placeholder="For Example: I'm a Frontend Developer with more than 5 years of experience ..."
        multiline
        maxRows={4}
        value={props.userData.summary}
        onChange={handleSummary}
        variant="filled"
      />
      <LinearProgressWithLabel />

      <Snackbar
        open={openSummarySnackBar}
        autoHideDuration={3000}
        onClose={handleClose}
        message={snackBarMessage}
      />
    </div>
  );
}

export default Summary;
