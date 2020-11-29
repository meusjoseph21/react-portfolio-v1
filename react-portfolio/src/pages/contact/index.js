import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core/";
import { AnimatedSocialIcon } from "react-animated-social-icons";
import Resume from "./resume.pdf"
import Typing from "react-typing-animation";

const useStyles = makeStyles((theme) => ({
  marginIcons: {
    marginBottom: 50,
  },
}));

function Contact() {
  const [numPages, setNumPages] = useState(2);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  const classes = useStyles();
  return (
    <div className="contact" id="contactMe">
      <Grid container spacing={3}>
        <Grid item xs={2}></Grid>
        <Grid item xs={4}>
          <div className="move">
            <Typing>
              <h1 className="colorChange">
                <span>Get In Touch on Social Media</span>
              </h1>
            </Typing>
            <Grid container spacing={0}>
              <Grid item xs={4}>
                <ul className="noBullet">
                  <li className="fade-in">
                    <div className={classes.marginIcons}>
                      <AnimatedSocialIcon
                        brandName="github"
                        url="https://github.com/meko-deng/react-animated-social-icons"
                        animation="grow"
                        defaultColor="#D1D1D1"
                        hoverColor="black"
                        width="4em"
                        animationDuration={2}
                        style={{ padding: "5em" }}
                      />
                    </div>
                  </li>
                  <li className="fade-in">
                    <div className={classes.marginIcons}>
                      <AnimatedSocialIcon
                        brandName="facebook"
                        url="https://github.com/meko-deng/react-animated-social-icons"
                        animation="grow"
                        defaultColor="#D1D1D1"
                        hoverColor="black"
                        width="4em"
                        animationDuration={2}
                        style={{ padding: "5em" }}
                      />
                    </div>
                  </li>
                  <li className="fade-in">
                    <div className={classes.marginIcons}>
                      <AnimatedSocialIcon
                        brandName="linkedin"
                        url="https://github.com/meko-deng/react-animated-social-icons"
                        animation="grow"
                        defaultColor="#D1D1D1"
                        hoverColor="black"
                        width="4em"
                        animationDuration={2}
                        style={{ padding: "5em" }}
                      />
                    </div>
                  </li>
                </ul>
              </Grid>
              <Grid item xs={4}>
                <ul className="noBullet">
                  <li className="fade-in">
                    <div className={classes.marginIcons}>
                      <AnimatedSocialIcon
                        brandName="youtube"
                        url="https://github.com/meko-deng/react-animated-social-icons"
                        animation="grow"
                        defaultColor="#D1D1D1"
                        hoverColor="black"
                        width="4em"
                        animationDuration={2}
                        style={{ padding: "5em" }}
                      />
                    </div>
                  </li>
                  <li className="fade-in">
                    <div className={classes.marginIcons}>
                      <AnimatedSocialIcon
                        brandName="instagram"
                        url="https://github.com/meko-deng/react-animated-social-icons"
                        animation="grow"
                        defaultColor="#D1D1D1"
                        hoverColor="black"
                        width="4em"
                        animationDuration={2}
                        style={{ padding: "5em" }}
                      />
                    </div>
                  </li>
                  <li className="fade-in">
                    <div className={classes.marginIcons}>
                      <AnimatedSocialIcon
                        brandName="spotify"
                        url="https://github.com/meko-deng/react-animated-social-icons"
                        animation="grow"
                        defaultColor="#D1D1D1"
                        hoverColor="black"
                        width="4em"
                        animationDuration={2}
                        style={{ padding: "5em" }}
                      />
                    </div>
                  </li>
                </ul>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={4}>
          <div className="move">
            <Typing>
              <h1 className="colorChange">
                <span>Check Out My Resume</span>
              </h1>
            </Typing>
            <div>
              <Document
                file={Resume}
                onLoadSuccess={onDocumentLoadSuccess}
              >
                <Page pageNumber={pageNumber} />
              </Document>
              <p>
                Page {pageNumber} of {numPages}
              </p>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Contact;
