import React, {useState} from 'react'
import TextField from "@mui/material/TextField";
import "./Summary.css"
import Snackbar from "@mui/material/Snackbar";

function Summary() {
    const [summaryValue, setSummaryValue] = useState("");
    const [summaryCharacterCounter, setSummaryCharacterCounter] = useState(0);
    const [openSummarySnackBar, setOpenSummarySnackBar] = useState(false);

    const summaryCharacterLimit = 500;

    const snackBarMessage = "Your summary should have less than " + {summaryCharacterLimit} + " characters.";

    const handleSummary = (event) => {
        if(summaryCharacterLimit < summaryCharacterLimit){
            setSummaryCharacterCounter(summaryCharacterCounter + 1)
            setSummaryValue(event.target.value);
        }
        else{
            setOpenSummarySnackBar(true)
        }
      setSummaryValue(event.target.value);
    };

    const handleClose = (event, reason) => {
        setOpenSummarySnackBar(false);
    if (reason === 'clickaway') {
      return;
    }

  return (
    <div>
      <TextField
        className='summary'
        id="filled-multiline-flexible"
        label="For Example: I'm a Frontend Developer with more than 5 years of experience ..."
        multiline
        maxRows={4}
        value={summaryValue}
        onChange={handleSummary}
        variant="filled"
      />

      <Snackbar
        open={openSummarySnackBar}
        autoHideDuration={3000}
        onClose={handleClose}
        message= {snackBarMessage}
      />
    </div>
  );
}
}

export default Summary