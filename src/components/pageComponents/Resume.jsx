import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Resume() {

  useEffect(() => {
    AOS.init({
      duration: 3000, // Animation duration in milliseconds
    });
  }, []);


  return (
    <div
      id="resume"
      className="d-md-flex justify-content-between align-items-center content"
    >
      <div  data-aos="zoom-in-down">
        <h4 className="fs-5">RESUME</h4>
        <div className="line"></div>
        <div className="w-100 resume-content">
          I'm open to <span className="fw-bold">Job opportunities</span> where I can contribute, learn and grow.
          you can view <span  className="fw-bold ">My Resume</span>
          <button className="btn download_resume">
            <a
              href="../images/Manikandan_Developer_UpdatedResume.pdf"
              download="Manikandan_Developer_UpdatedResume.pdf"
              className=""
            >
              Download
            </a>
          </button>
        </div>
      </div>
      <img
      data-aos="zoom-in-up"
        className=" resume_shadow"
        src={"../.././images/resume.jpg"}
        alt="React Image"
      />
    </div>
  );
}

export default Resume;
