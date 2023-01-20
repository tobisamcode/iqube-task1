import React from "react";
import "./index.css";

const Tabs = ({ activeTab }) => {

  const headingClass =
    (activeTab === "personalInfo") ? "tab-headings" : "tab-headings-billing";

  return (
    <div>
      <div className={headingClass}>
        <div className="tab-headings-single">
          <h5 className={activeTab === "personalInfo" ? "tab-active" : "none"}>
            Personal Info
          </h5>
        </div>
        <div className="tab-headings-single">
          <h5 className={activeTab === "billingInfo" ? "tab-active" : "none"}>
            Billing Info
          </h5>
        </div>
        <div className="tab-headings-single">
          <h5>Confirm Payment</h5>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
