import React from "react";
import resourceArr from "../data/sampleData.json";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Typography from "@mui/material/Typography";

const PatientDiagnosis = ({ handleChange, data }) => {
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
          We appreciate the feedback.
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
          One last question: How do you feel about being diagnosed with{" "}
          {diagnosis}?
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 3,
          }}
        >
          <TextareaAutosize
            style={{ width: 350, fontFamily: "Raleway" }}
            minRows={5}
            onChange={handleChange}
            name="comments"
            value={data.comments}
          />
        </Box>
      </Box>
    </CardContent>
  );
};

export default PatientDiagnosis;
