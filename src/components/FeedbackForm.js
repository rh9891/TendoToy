import React, { useState } from "react";
import Landing from "./Landing";
import PatientRecommendation from "./PatientRecommendation";
import DoctorDiagnosis from "./DoctorDiagnosis";
import PatientDiagnosis from "./PatientDiagnosis";
import Confirmation from "./Confirmation";
import Success from "./Success";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    rating: "",
    comments: "",
    communication: "",
    satisfaction: "",
  });

  const [page, setPage] = useState(1);

  const nextPage = () => {
    if (page < 6) {
      setPage(page + 1);
    } else if (page === 5) {
      console.log(setFormData);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <Card variant="outlined" className="container">
      {
        {
          1: <Landing handleChange={handleChange} />,
          2: (
            <PatientRecommendation
              handleChange={handleChange}
              data={formData}
            />
          ),
          3: <DoctorDiagnosis handleChange={handleChange} data={formData} />,
          4: <PatientDiagnosis handleChange={handleChange} data={formData} />,
          5: <Confirmation handleChange={handleChange} data={formData} />,
          6: <Success />,
        }[page]
      }
      <CardActions>
        {page > 1 && page < 6 ? (
          <button className="button" onClick={prevPage}>
            Back
          </button>
        ) : null}
        {page < 6 ? (
          <button
            className={"button " + (page === 1 ? "get-started-button" : "")}
            onClick={nextPage}
          >
            {page === 1
              ? "Get Started"
              : page === 5
              ? "Submit"
              : page === 6
              ? null
              : "Continue"}
          </button>
        ) : null}
      </CardActions>
    </Card>
  );
};

export default FeedbackForm;
