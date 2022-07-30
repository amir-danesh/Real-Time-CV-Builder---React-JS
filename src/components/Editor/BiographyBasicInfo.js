import React from "react";
import TextField from "@mui/material/TextField";
import "./Biography.css";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";

function BiographyBasicInfo(props) {
  const handleBasicInfoChange = (value, field) => {
    props.setUserData((prevState) => {
      return {
        ...prevState,
        basicInfo: { ...prevState.basicInfo, [field]: value },
      };
    });
  };

  const years = [];

  for (let i = 2022; i > 1900; i--) {
    years.push(i);
  }

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = [];

  for (let i = 1; i < 32; i++) {
    days.push(i);
  }

  return (
    <div>
      <div className="textfield-oneline">
        <TextField
          variant="outlined"
          label="First Name"
          margin="dense"
          size="small"
          className="tf-2inrow"
          value={props.userData.firstName}
          onChange={(event) => {
            handleBasicInfoChange(event.target.value, "firstName");
          }}
        />
        <TextField
          variant="outlined"
          label="Last Name"
          margin="dense"
          size="small"
          className="tf-2inrow"
          value={props.userData.lastName}
          onChange={(event) => {
            handleBasicInfoChange(event.target.value, "lastName");
          }}
        />
      </div>
      <TextField
        variant="outlined"
        label="Job Title"
        placeholder="For example: Front-End Developer"
        margin="dense"
        size="small"
        className="tf-1inrow"
        value={props.userData.jobTitle}
        onChange={(event) => {
          handleBasicInfoChange(event.target.value, "jobTitle");
        }}
      />
      <div
        style={{
          marginTop: "8px",
        }}
        className="textfield-oneline"
      >
        <div>
          <InputLabel>Gender</InputLabel>
          <ToggleButtonGroup
            color="primary"
            exclusive
            className="gender-toggle-group"
            value={props.userData.gender}
            onChange={(event, newGender) => {
              handleBasicInfoChange(newGender, "gender");
            }}
          >
            <ToggleButton value="Male">Male</ToggleButton>
            <ToggleButton value="Female">Female</ToggleButton>
            <ToggleButton value="Other">Other</ToggleButton>
          </ToggleButtonGroup>
        </div>

        <div>
          <InputLabel>Marital Status</InputLabel>
          <ToggleButtonGroup
            color="primary"
            exclusive
            value={props.userData.maritalStatus}
            onChange={(event, newMaritalStatus) => {
              handleBasicInfoChange(newMaritalStatus, "maritalStatus");
            }}
          >
            <ToggleButton value="Married">Married</ToggleButton>
            <ToggleButton value="Single">Single</ToggleButton>
            <ToggleButton value="Other">Other</ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>
      <div
        style={{
          marginTop: "8px",
          alignItems: "end",
        }}
        className="textfield-oneline"
      >
        <div style={{ width: "250px" }}>
          <FormControl fullWidth>
            <InputLabel id="military-selection">
              Military Services Status
            </InputLabel>
            <Select
              labelId="military-selection"
              label="Military Services Status"
              value={props.userData.militaryStatus}
              onChange={(event) => {
                handleBasicInfoChange(event.target.value, "militaryStatus");
              }}
            >
              <MenuItem value="Educational exemption">
                Educational exemption
              </MenuItem>
              <MenuItem value="Finished">Finished</MenuItem>
              <MenuItem value="Exempted">Exempted</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          <InputLabel id="dob-inputlabel">Date of Birth</InputLabel>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ width: "100px" }}>
              <FormControl fullWidth>
                <InputLabel id="year-dob">Year</InputLabel>
                <Select
                  labelId="year-dob"
                  label="Date Of Birth"
                  value={props.userData.yearDOB}
                  onChange={(event) => {
                    handleBasicInfoChange(event.target.value, "yearDOB");
                  }}
                >
                  {years.map((year,index) => (
                    <MenuItem value={year} key={index}>{year}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div style={{ width: "150px" }}>
              <FormControl fullWidth>
                <InputLabel id="month-dob">Month</InputLabel>
                <Select
                  labelId="month-dob"
                  label="Date Of Birth"
                  value={props.userData.monthDOB}
                  onChange={(event) => {
                    handleBasicInfoChange(event.target.value, "monthDOB");
                  }}
                >
                  {months.map((month,index) => (
                    <MenuItem value={month} key={index}>{month}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div style={{ width: "80px" }}>
              <FormControl fullWidth>
                <InputLabel id="day-dob">Day</InputLabel>
                <Select
                  labelId="day-dob"
                  label="Date Of Birth"
                  value={props.userData.dayDOB}
                  onChange={(event) => {
                    handleBasicInfoChange(event.target.value, "dayDOB");
                  }}
                >
                  {days.map((day, index) => (
                    <MenuItem value={day} key={index}>{day}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BiographyBasicInfo;
