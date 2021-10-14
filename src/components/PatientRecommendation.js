import React from "react";
import resourceArr from "../data/sampleData.json";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const PatientRecommendation = ({ data, handleChange }) => {
  const onKeyDown = (event) => {
    const input = String.fromCharCode(event.keyCode);
    if (/[a-zA-Z0-9-_ ]/.test(input)) {
      event.preventDefault();
    }
  };

  const patientName = resourceArr[0].entry[0].resource.name[0].text;

  const doctorFamilyName = resourceArr[0].entry[1].resource.name[0].family;

  const doctorFirstName = resourceArr[0].entry[1].resource.name[0].given[0];

  const doctorName = doctorFirstName + " " + doctorFamilyName;

  return (
    <CardContent>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: "500",
            fontFamily: "Raleway",
          }}
          variant="h6"
          gutterBottom
          component="div"
        >
          Hi, {patientName}.
        </Typography>
        <Typography
          sx={{
            textAlign: "left",
            fontWeight: "medium",
            fontFamily: "Raleway",
          }}
          variant="subtitle1"
          gutterBottom
          component="div"
        >
          On a scale of 1 to 10, would you recommend <br /> Dr. {doctorName} to
          a friend or family member?
        </Typography>
        <div>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              m: 1,
            }}
          >
            <TextField
              id="outlined-number"
              label={
                <Typography
                  sx={{
                    fontFamily: "Raleway",
                  }}
                >
                  Rating
                </Typography>
              }
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{ min: "1", max: "10", step: "1" }}
              name="rating"
              value={data.rating}
              onChange={handleChange}
              onKeyDown={onKeyDown}
            />
          </Box>
          <Typography
            sx={{
              fontFamily: "Raleway",
            }}
            variant="caption"
            gutterBottom
            component="div"
          >
            1 = Would not recommend, 10 = Would strongly recommend
          </Typography>
        </div>
      </Box>
    </CardContent>
  );
};

export default PatientRecommendation;
