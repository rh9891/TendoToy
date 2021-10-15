import React from "react";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import HealingIcon from "@mui/icons-material/Healing";

const Landing = () => {
  return (
    <CardContent>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          m: 0.5,
        }}
      >
        <HealingIcon sx={{ fontSize: 100, color: "#c9d5cb" }} />
      </Box>
      <br />
      <Typography
        sx={{
          textAlign: "center",
          fontWeight: "500",
          fontFamily: "Raleway",
        }}
        ml={3}
        mr={3}
        variant="h5"
        component="div"
      >
        We care about <strong>you</strong>.
      </Typography>
      <br />
      <Typography
        sx={{
          textAlign: "center",
          fontWeight: "500",
          fontFamily: "Raleway",
        }}
        ml={3}
        mr={3}
        variant="h6"
        component="div"
      >
        And we care about your opinion.
      </Typography>
      <br />
      <Typography
        sx={{
          textAlign: "center",
          fontWeight: "medium",
          fontFamily: "Raleway",
        }}
        variant="subtitle"
      >
        Help us improve our care by sharing feedback.
      </Typography>
    </CardContent>
  );
};

export default Landing;
