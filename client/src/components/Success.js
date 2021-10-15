import React from "react";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Typography from "@mui/material/Typography";

const Success = () => {
  return (
    <CardContent>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          m: 0.5,
        }}
      >
        <CheckCircleIcon sx={{ fontSize: 80, color: "#c9d5cb" }} />
      </Box>
      <br />
      <Typography
        sx={{
          textAlign: "center",
          fontWeight: "medium",
          fontFamily: "Raleway",
        }}
        variant="h5"
        gutterBottom
        component="div"
      >
        Thank you for taking the time to complete this survey. We appreciate
        your feedback.
      </Typography>
    </CardContent>
  );
};

export default Success;
