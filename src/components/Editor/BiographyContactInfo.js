import React, { useMemo } from "react";
import TextField from "@mui/material/TextField";
import "./Biography.css";
import countryList from "react-select-country-list";
import Autocomplete from "@mui/material/Autocomplete";

function BiographyContactInfo(props) {
  const allCountries = useMemo(() => countryList().getData(), []);

  const handleContactInfoChange = (value, field) => {
    props.setUserData((prevState) => {
      return {
        ...prevState,
        contactInfo: { ...prevState.contactInfo, [field]: value },
      };
    });
  };

  return (
    <div>
      <div className="textfield-oneline">
        <TextField
          variant="outlined"
          label="Email"
          margin="dense"
          size="small"
          className="tf-2inrow"
          value={props.userData.email}
          onChange={(event) => {
            handleContactInfoChange(event.target.value, "email");
          }}
        />
        <TextField
          variant="outlined"
          label="Phone Number"
          margin="dense"
          size="small"
          className="tf-2inrow"
          value={props.userData.phoneNumber}
          onChange={(event) => {
            handleContactInfoChange(event.target.value, "phoneNumber");
          }}
        />
      </div>
      <div className="textfield-oneline">
        <TextField
          variant="outlined"
          label="Home Number"
          margin="dense"
          size="small"
          className="tf-2inrow"
          value={props.userData.homeNumber}
          onChange={(event) => {
            handleContactInfoChange(event.target.value, "homeNumber");
          }}
        />
        <TextField
          variant="outlined"
          label="Website"
          margin="dense"
          size="small"
          className="tf-2inrow"
          value={props.userData.website}
          onChange={(event) => {
            handleContactInfoChange(event.target.value, "website");
          }}
        />
      </div>
      <div
        className="textfield-oneline"
        style={{ marginTop: "10px", alignItems: "start" }}
      >
        <Autocomplete
          isOptionEqualToValue={(option, newOption) =>
            option.value === newOption.value
          }
          disablePortal
          id="combo-box-demo"
          options={allCountries}
          sx={{ width: 350 }}
          value={props.userData.country}
          onChange={(event, newCountry) => {
            handleContactInfoChange(newCountry, "country");
          }}
          renderInput={(params) => <TextField {...params} label="Country" />}
        />
        <TextField
          variant="outlined"
          label="City"
          margin="dense"
          size="small"
          className="tf-2inrow"
          value={props.userData.city}
          onChange={(event) => {
            handleContactInfoChange(event.target.value, "city");
          }}
        />
      </div>
    </div>
  );
}

export default BiographyContactInfo;
