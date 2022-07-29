import React, { useState, useMemo } from "react";
import TextField from "@mui/material/TextField";
import "./Biography.css";
import countryList from "react-select-country-list";
import Autocomplete from "@mui/material/Autocomplete";

function BiographyContactInfo() {
  const allCountries = useMemo(() => countryList().getData(), []);
  return (
    <div>
      <div className="textfield-oneline">
        <TextField
          variant="outlined"
          label="Email"
          margin="dense"
          size="small"
          className="tf-2inrow"
        />
        <TextField
          variant="outlined"
          label="Phone Number"
          margin="dense"
          size="small"
          className="tf-2inrow"
        />
      </div>
      <div className="textfield-oneline">
        <TextField
          variant="outlined"
          label="Home Number"
          margin="dense"
          size="small"
          className="tf-2inrow"
        />
        <TextField
          variant="outlined"
          label="Website"
          margin="dense"
          size="small"
          className="tf-2inrow"
        />
      </div>
      <div
        className="textfield-oneline"
        style={{ marginTop: "10px", alignItems: "start" }}
      >
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={allCountries}
          sx={{ width: 350 }}
          renderInput={(params) => <TextField {...params} label="Country" />}
        />
        <TextField
          variant="outlined"
          label="City"
          margin="dense"
          size="small"
          className="tf-2inrow"
        />
      </div>
    </div>
  );
}

export default BiographyContactInfo;
