import React from "react";
import { Detector } from "react-detect-offline";

const CheckConnection = (props) => {
    const handleReload = () => {
        window.location.reload();
      };
  return (
    <>
      <Detector
        render={({ online }) =>
          online ? (
            props.children
          ) : (
            <div
              style={{ padding: "10px", textAlign: "center" }}
              className="checkconnection"
            >
              {/* <div>
                <img
                  className="about_shadow"
                  src={"../.././images/heros.png"}
                  alt="maintaince Image"
                />
              </div> */}
              <h2>Slow or unstable internet connection</h2>
              <p>check your connection, then refresh the page</p>
              <button
                onClick={handleReload}
                className="btn btn-info"
                style={{ margin: "0 auto" }}
              >
                Refresh
              </button>
            </div>
          )
        }
      />
    </>
  );
};

export default CheckConnection;
