import React from "react";
import "./index.css";

const PersonalInfo = () => {
  return (
    <div>
      <form className="form-flex bill-form-1">
        <div className="form-row">
          <label className="field-label">Name</label>
          <input
            className="form-input-field"
            type="text"
            placeholder="Opara Linus Ahmed"
          />
        </div>

        <div className="form-row">
          <label className="field-label">
            Email Address{" "}
            <span className="required-star required-star-email">&#8270;</span>
          </label>
          <span className="email-field-notice">
            The purchase receipt would be sent to this address
          </span>
          <input
            className="form-input-field"
            type="email"
            placeholder="OparaLinusAhmed@devmail.com"
          />
        </div>

        <div className="form-row">
          <label className="field-label">Address 1</label>
          <input
            className="form-input-field"
            type="text"
            placeholder="The address of the user goes here"
          />
        </div>

        <div className="form-row">
          <label className="field-label">Address 2</label>
          <input
            className="form-input-field"
            type="text"
            placeholder="and here"
          />
        </div>
        <div className="form-row row-flex">
          <div className="flex-column-7">
            <label className="field-label">Local Government</label>
            <input
              className="form-input-field"
              type="text"
              placeholder="Surulere"
            />
          </div>
          <div className="flex-column-5 state-field">
            <label className="field-label">State</label>
            <select className="form-input-field select-field">
              <option>Lagos</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
