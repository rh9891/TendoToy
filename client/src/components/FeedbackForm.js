import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Landing from "./Landing";
import PatientRecommendation from "./PatientRecommendation";
import DoctorDiagnosis from "./DoctorDiagnosis";
import PatientDiagnosis from "./PatientDiagnosis";
import Confirmation from "./Confirmation";
import Success from "./Success";

import { addResponses } from "../actions/responseActions";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    rating: "",
    comments: "",
    communication: "",
    satisfaction: "",
  });

  const { rating, comments, communication, satisfaction } = formData;

  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  const nextPage = () => {
    if (page < 7) {
      setPage(page + 1);
    }
  };

  console.log(page);

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const onSubmit = () => {
    const newResponse = {
      communication,
      rating,
      comments,
      satisfaction,
    };

    dispatch(addResponses(newResponse));
    nextPage();
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
            onClick={page === 5 ? onSubmit : nextPage}
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
