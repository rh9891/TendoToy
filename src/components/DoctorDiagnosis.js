import React, { Fragment } from "react";
import resourceArr from "../data/sampleData.json";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Typography from "@mui/material/Typography";

const DoctorDiagnosis = ({ data, handleChange }) => {
  const doctorFamilyName = resourceArr[0].entry[1].resource.name[0].family;

  const doctorFirstName = resourceArr[0].entry[1].resource.name[0].given[0];

  const doctorName = doctorFirstName + " " + doctorFamilyName;

  const diagnosis = resourceArr[0].entry[3].resource.code.coding[0].name;

  return (
    <CardContent>
      <Box sx={{ minWidth: 120 }}>
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
          Thank you.
        </Typography>
        <Typography
          sx={{
            textAlign: "left",
            fontWeight: "medium",
            fontFamily: "Raleway",
            mt: 1,
            mb: 1,
          }}
          variant="subtitle1"
          gutterBottom
          component="div"
        >
          You were diagnosed with {diagnosis}. Did Dr. {doctorName} explain how
          to manage this diagnosis in a way you could understand?
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 2,
            mb: 2,
          }}
        >
          <TextField
            onChange={handleChange}
            name="satisfaction"
            value={data.satisfaction}
            label={
              <Typography
                sx={{
                  fontFamily: "Raleway",
                }}
              >
                Yes or No
              </Typography>
            }
            inputProps={{ maxLength: 3 }}
          />
        </Box>
        {data.satisfaction === "" ? null : (
          <Fragment>
            <Typography
              sx={{
                textAlign: "left",
                fontWeight: "500",
                fontFamily: "Raleway",
              }}
              variant="caption"
              gutterBottom
              component="div"
            >
              Is there anything that you would like to add?
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: 1,
              }}
            >
              <TextareaAutosize
                style={{ width: 350, fontFamily: "Raleway" }}
                minRows={5}
                onChange={handleChange}
                name="communication"
                value={data.communication}
              />
            </Box>
          </Fragment>
        )}
      </Box>
    </CardContent>
  );
};

export default DoctorDiagnosis;
