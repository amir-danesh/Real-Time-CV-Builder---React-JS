import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import "./SimpleBlackWhite.css";

function SimpleBlackWhite(props) {
  const [fullname, setFullName] = useState("");
  const [fullAddress, setFullAddress] = useState("");

  useEffect(() => {
    if (
      props.userData.contactInfo.country !== "" &&
      props.userData.contactInfo.city !== ""
    ) {
      setFullAddress(
        props.userData.contactInfo.city +
          ", " +
          props.userData.contactInfo.country.label
      );
    }
  }, [props.userData.contactInfo.country, props.userData.contactInfo.city]);

  useEffect(() => {
    setFullName(
      props.userData.basicInfo.firstName +
        " " +
        props.userData.basicInfo.lastName
    );
  }, [props.userData.basicInfo.firstName, props.userData.basicInfo.lastName]);

  return (
    <div className="root">
      <div>
        <h1 className="fullname">{fullname !== "" && fullname}</h1>
        <h2 className="jobtitle">
          {props.userData.basicInfo.jobTitle &&
            props.userData.basicInfo.jobTitle}
        </h2>
      </div>
      <Grid container className="contactinfo">
        <div className="left-divs">
          <div>
            {props.userData.contactInfo.website && (
              <a href={"https://" + props.userData.contactInfo.website}>
                {props.userData.contactInfo.website}
              </a>
            )}
          </div>
          <div>
            {props.userData.contactInfo.email && (
              <a href={"mailto:" + props.userData.contactInfo.email}>
                {props.userData.contactInfo.email}
              </a>
            )}
          </div>
          <div>
            {fullAddress !== "" && <p style={{ margin: 0 }}>{fullAddress}</p>}
          </div>
        </div>
        <div className="right-divs">
          <div>
            {props.userData.contactInfo.phoneNumber && (
              <a href={"tel:" + props.userData.contactInfo.phoneNumber}>
                {props.userData.contactInfo.phoneNumber}
              </a>
            )}
          </div>
          <div>
            {props.userData.contactInfo.homeNumber && (
              <a href={"tel:" + props.userData.contactInfo.homeNumber}>
                {props.userData.contactInfo.homeNumber}
              </a>
            )}
          </div>
        </div>
      </Grid>
      <Grid container>
        {props.userData.basicInfo.gender && (
          <Grid item xs={2}>
            <ul className="ul-reduce-padding">
              <li className="li-basicinfo">
                Gender: {props.userData.basicInfo.gender}
              </li>
            </ul>
          </Grid>
        )}
        {props.userData.basicInfo.maritalStatus && (
          <Grid item xs={3}>
            <ul className="ul-reduce-padding">
              <li className="li-basicinfo">
                Marital Status: {props.userData.basicInfo.maritalStatus}
              </li>
            </ul>
          </Grid>
        )}
        {props.userData.basicInfo.militaryStatus && (
          <Grid item xs={3}>
            <ul className="ul-reduce-padding">
              <li className="li-basicinfo">
                Military Service: {props.userData.basicInfo.militaryStatus}
              </li>
            </ul>
          </Grid>
        )}
        {props.userData.basicInfo.militaryStatus && (
          <Grid item xs={4}>
            <ul className="ul-reduce-padding">
              <li className="li-basicinfo">
                Date Of Birth: {props.userData.basicInfo.dayDOB}{" "}
                {props.userData.basicInfo.monthDOB}{" "}
                {props.userData.basicInfo.yearDOB}
              </li>
            </ul>
          </Grid>
        )}
      </Grid>
      {props.userData.summary.summary && (
        <>
          <h2 className="section-title">Summary</h2>
          <div style={{ textAlign: "left" }}>
            {props.userData.summary.summary}
          </div>
        </>
      )}
    </div>
  );
}

export default SimpleBlackWhite;
