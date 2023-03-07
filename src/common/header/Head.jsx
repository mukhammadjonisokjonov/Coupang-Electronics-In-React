import React from "react";
import ReactCountryFlag from "react-country-flag";
// npm install --save react-country-flag //

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container d_flex">
          <div className="left row">
            <div className="py">
              <i className="fa fa-phone"></i>
              <label>+8255 3457 7894</label>
            </div>
            <div className="py">
              <i className="fa fa-envelope"></i>
              <label>coupang@gmail.com</label>
            </div>
          </div>
          <div className="align row">
            <label className="py">Theme FAQ's</label>
            <label className="py">Need Helps</label>
          </div>
          <div className="row RText">
            <div className="py">
              <span>
                <ReactCountryFlag
                  countryCode="US"
                  style={{
                    width: "1em",
                    height: "1em",
                  }}
                  svg
                  cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                  cdnSuffix="svg"
                  title="US"
                />
              </span>
              <label className="flag">EN</label>
            </div>

            <div className="py">
              <span>
                <ReactCountryFlag
                  countryCode="KR"
                  style={{
                    width: "2em",
                    height: "1em",
                  }}
                  svg
                  cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                  cdnSuffix="svg"
                  title="KR"
                />
              </span>
              <label>KR</label>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
