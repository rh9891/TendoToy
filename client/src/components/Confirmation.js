import React from "react";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import Typography from "@mui/material/Typography";

const Confirmation = ({ data }) => {
  const { communication, rating, comments, satisfaction } = data;

  return (
    <CardContent>
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
        Thanks again. Here's what we heard:
      </Typography>
      <Typography
        sx={{
          textAlign: "left",
          fontWeight: "medium",
          fontFamily: "Raleway",
        }}
        variant="subtitle2"
        gutterBottom
        component="div"
      >
        (If you want to change your responses, please go back and do so. If
        you're satisfied with your responses, please submit the form.)
      </Typography>
      <List>
        <ListItem>
          <ListItemText
            primary={
              <Typography
                sx={{
                  textAlign: "left",
                  fontWeight: "bold",
                  fontFamily: "Raleway",
                  mt: 1,
                  mb: 1,
                }}
              >
                How likely are you to recommend the doctor on a scale from 1 to
                10?
              </Typography>
            }
            secondary={
              <Typography
                sx={{
                  textAlign: "left",
                  fontWeight: "medium",
                  fontFamily: "Raleway",
                }}
              >
                {rating}
              </Typography>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <Typography
                sx={{
                  textAlign: "left",
                  fontWeight: "bold",
                  fontFamily: "Raleway",
                  mt: 1,
                  mb: 1,
                }}
              >
                Did the doctor clearly explain management of your diagnosis?
              </Typography>
            }
            secondary={
              <Typography
                sx={{
                  textAlign: "left",
                  fontWeight: "medium",
                  fontFamily: "Raleway",
                }}
              >
                {satisfaction}
              </Typography>
            }
          />
        </ListItem>
        {communication === "" ? null : (
          <ListItem>
            <ListItemText
              primary={
                <Typography
                  sx={{
                    textAlign: "left",
                    fontWeight: "bold",
                    fontFamily: "Raleway",
                    mt: 1,
                    mb: 1,
                  }}
                >
                  How could have the experience been better?
                </Typography>
              }
              secondary={
                <Typography
                  sx={{
                    textAlign: "left",
                    fontWeight: "medium",
                    fontFamily: "Raleway",
                  }}
                >
                  {communication}
                </Typography>
              }
            />
          </ListItem>
        )}
        <ListItem>
          <ListItemText
            primary={
              <Typography
                sx={{
                  textAlign: "left",
                  fontWeight: "bold",
                  fontFamily: "Raleway",
                  mt: 1,
                  mb: 1,
                }}
              >
                How do you feel about your diagnosis?
              </Typography>
            }
            secondary={
              <Typography
                sx={{
                  textAlign: "left",
                  fontWeight: "medium",
                  fontFamily: "Raleway",
                }}
              >
                {comments}
              </Typography>
            }
          />
        </ListItem>
      </List>
    </CardContent>
  );
};

export default Confirmation;
