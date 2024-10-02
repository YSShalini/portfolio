import React, { useState } from "react";
import "./accordion.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(16),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

const AccordionComponent = () => {
  const classes = useStyles();

  return (
    <div className="accordion-container">
      <div className="accordion-sub-container">
        <div className={classes.root}>
          <h2 style={{ fontWeight: "normal", color: "#333" }}>
            People also ask
          </h2>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
              Where do you see yourself in five years?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              In five years, I see myself as a skilled developer working on impactful projects. I hope to take on more responsibilities and possibly lead a team to drive innovative solutions.   </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>
              What are your hobbies?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              I enjoy gardening, which helps me relax and connect with nature.I also enjoy working on personal coding projects to enhance my skills.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography className={classes.heading}>
              What projects have you worked on during your studies?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              I worked on several projects, including a job recommendation portal and a plant disease diagnosis app. These projects helped me apply my skills in real-world scenarios.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4a-content"
              id="panel4a-header"
            >
              <Typography className={classes.heading}>
              Why should we hire you?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              You should hire me because I’m passionate about technology and eager to learn. I have a good foundation in programming and strong skills in full-stack development. I’m ready to contribute to your team and deliver quality work.
               </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default AccordionComponent;
