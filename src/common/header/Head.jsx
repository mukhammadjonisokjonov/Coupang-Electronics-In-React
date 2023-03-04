import React from "react";
import ReactCountryFlag from "react-country-flag";
// npm install --save react-country-flag //

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container d_flex">
          <div className="left row">
            <i className="fa fa-phone"></i>
            <label>+88012 3457 7894</label>
            <i className="fa fa-envelope"></i>
            <label>coupang@gmail.com</label>
          </div>
          <div className="right row RText">
            <label>Theme FAQ's</label>
            <label>Need Helps</label>
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
      </section>
    </>
  );
};

export default Head;
