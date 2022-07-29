import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import "./Biography.css";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";


function BiographyBasicInfo(props) {
  const [genderAlignment, setGenderAlignment] = useState("");
  const [maritalStatusAlignment, setmaritalStatusAlignment] = useState("");
  const [militaryStatus, setMilitaryStatus] = useState("");
  const [yearDOB, setYearDOB] = useState("")
  const [monthDOB, setMonthDOB] = useState("")
  const [dayDOB, setDayDOB] = useState("");

  const years = []

  for (let i=2022;i>1900;i--){
    years.push(i);
  }

  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  const days = []

  for (let i = 1; i < 32; i++) {
    days.push(i);
  }

  const handleGenderSelection = (event, newAlignment) => {
    setGenderAlignment(newAlignment);
  };
  const handleMaritalStatusSelection = (event, newAlignment) => {
    setmaritalStatusAlignment(newAlignment);
  };
  const handleMilitaryServicesChange = (event) => {
    setMilitaryStatus(event.target.value);
  };
  const handleYearDOBChange = (event) => {
    setYearDOB(event.target.value);
  };
  const handleMonthDOBChange = (event) => {
    setMonthDOB(event.target.value);
  };
  const handleDayDOBChange = (event) => {
    setDayDOB(event.target.value);
  };

  return (
    <div>
      <div className="textfield-oneline">
        <TextField
          variant="outlined"
          label="First Name"
          margin="dense"
          size="small"
          className="tf-2inrow"
        />
        <TextField
          variant="outlined"
          label="Last Name"
          margin="dense"
          size="small"
          className="tf-2inrow"
        />
      </div>
      <TextField
        variant="outlined"
        label="Job Title"
        placeholder="For example: Front-End Developer"
        margin="dense"
        size="small"
        className="tf-1inrow"
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
            value={genderAlignment}
            exclusive
            onChange={handleGenderSelection}
            className="gender-toggle-group"
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
            value={maritalStatusAlignment}
            exclusive
            onChange={handleMaritalStatusSelection}
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
          alignItems: "end"
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
              value={militaryStatus}
              label="Military Services Status"
              onChange={handleMilitaryServicesChange}
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
          <InputLabel>Gender</InputLabel>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ width: "100px" }}>
              <FormControl fullWidth>
                <InputLabel id="year-dob">Year</InputLabel>
                <Select
                  labelId="year-dob"
                  value={yearDOB}
                  label="Date Of Birth"
                  onChange={handleYearDOBChange}
                >
                  {years.map((year) => (
                    <MenuItem value={year}>{year}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div style={{ width: "150px" }}>
              <FormControl fullWidth>
                <InputLabel id="month-dob">Month</InputLabel>
                <Select
                  labelId="month-dob"
                  value={monthDOB}
                  label="Date Of Birth"
                  onChange={handleMonthDOBChange}
                >
                  {months.map((month) => (
                    <MenuItem value={month}>{month}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div style={{ width: "80px" }}>
              <FormControl fullWidth>
                <InputLabel id="day-dob">Day</InputLabel>
                <Select
                  labelId="day-dob"
                  value={dayDOB}
                  label="Date Of Birth"
                  onChange={handleDayDOBChange}
                >
                  {days.map((day) => (
                    <MenuItem value={day}>{day}</MenuItem>
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
