import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="yardsales">Yard Sales:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          list="yardsales"
          location="area"
          type="text"
          className="form-control"
          placeholder="Look for yardsales"
          id="yardsale"
        />
        <datalist id="yardsales">
          {props.yardsales.map(yardsale => (
            <option value={yardsale} key={yardsale} />
          ))}
        </datalist>
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
