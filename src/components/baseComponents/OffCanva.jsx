import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function OffCanvasComponent({ imageSrc, name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Assuming you want to display a specific image in the Offcanvas
  const imagePath = "../../images/manikandan_image.jpeg";
  const imagePath1 = "../../images/offCanvas.jpeg";
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration in milliseconds
    });
  }, []);

  return (
    <>
      <img
        src={imageSrc}
        alt={name}
        onClick={handleShow}
        className="rounded-circle"
        style={{ width: "45px", border: "1px solid green" }}
      />
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="p-0">
          <aside style={{ display: "grid", placeItems: "center" }}>
            <img
              className="rounded-circle" 
              src={imagePath}
              alt="Detailed View"
              style={{ width: "25%", border: "1px solid green" }}
            />
            <h5 className="pt-2 fw-4">Manikandan</h5>
            <p className="m-0" style={{ fontSize: "13px" }}>
              Web Developer
            </p>
          </aside>
          <hr />
          <main>
            <ul
              style={{
                padding: "0px",
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
              }}
            >
              <li className="py-2 text-danger" data-aos="fade-right">
               &#128522; REACTJS DEVELOPER
              </li>
              <li className="text-danger" data-aos="fade-left">
                &#128522; 2+ YEARS EXPERIENCE
              </li>
              <li className="py-2 text-danger" data-aos="fade-right">
                &#128522; B.Sc MATHS 2013-2016
              </li>
              <li className="text-danger" data-aos="fade-left">
                 &#128522; MCA 2024-2026
              </li>
            </ul>
            <div style={{ display: "grid", placeItems: "center" }}>
              <img
                className="rounded"
                src={imagePath1}
                alt="offcanvas View"
                style={{ width: "65%" ,height:"38vh"}}
              />
            </div>
          </main>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvasComponent;
