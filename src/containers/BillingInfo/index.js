import React from "react";

const BillingInfo = () => {
  return (
    <div>
      <form className="form-flex bill-form-1">
        <div className="form-row">
          <label className="field-label">
            Name on Card{" "}
            <span className="required-star required-star-name">&#8270;</span>
          </label>
          <input
            className="form-input-field"
            type="text"
            placeholder="Opara Linus Ahmed"
          />
        </div>
        <div className="form-row">
          <label className="field-label">
            Card Type{" "}
            <span className="required-star required-star-name">&#8270;</span>
          </label>
          <select className="form-input-field select-field">
              <option>MasterCard</option>
            </select>
        </div>

        <div className="form-row row-flex">
          <div className="flex-column-7">
            <label className="field-label">Card Details</label>
            <input
              className="form-input-field"
              type="text"
              placeholder="44960   44960   44960   44960"
            />
          </div>
          <div className="flex-column-3 state-field">
            <label className="field-label">Expiry Date</label>
            <input
              className="form-input-field"
              type="text"
              placeholder="  04    /   23  "
            />
          </div>
          <div className="flex-column-2 state-field">
            <label className="field-label">CVV</label>
            <input
              className="form-input-field"
              type="text"
              placeholder="995"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default BillingInfo;
