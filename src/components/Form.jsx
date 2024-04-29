// The component imports the useState hook from React to manage the component state.
import { useState } from "react";

// Declare the funtion Form with 2 props
// These props are used to manage the state of transactions in the parent component
export default function Form({ transactions, setTransactions }) {
  // Initialize the state variable "report" with an object containing 4 properties:
  // "date", "description", "category", and "amount", all set to an empty string
  const [report, setReport] = useState({
    date: "",
    description: "",
    category: "",
    amount: "",
  });

  // Declare the function sumbitHandle which handles the form submission event
  function submitHandle(e) {
    e.preventDefault();
    console.log(report);
    // Check if all properties in the "report" object have values
    if (report.date && report.description && report.category && report.amount) {
      // If all properties have values, add the "report" object to the "transactions" array
      setTransactions([...transactions, report]);
    }
  }

  // Function to handle input changes
  function changeHandle(e) {
    console.log(e.target.value);
    // Update the "report" state by spreading its current values and overwriting the property
    // associated with the input field that triggered the event
    setReport({
      ...report,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="row border" style={{ paddingBottom: "10px" }}>
      <div className="col-3">
        <h6>
          {/* Date input field */}
          <u>Date;</u>
        </h6>
        <input
          type="date"
          className="form-control"
          name="date"
          placeholder="date"
          aria-label="date"
          value={report.date}
          onChange={changeHandle}
        />
      </div>
      <div className="col-3">
        <h6>
          {/* Description input field */}
          <u>Description;</u>
        </h6>
        <input
          type="description"
          className="form-control"
          name="description"
          placeholder="description"
          aria-label="description"
          value={report.description}
          onChange={changeHandle}
        />
      </div>
      <div className="col-3">
        <h6>
          {/* Category input field */}
          <u>Category;</u>
        </h6>
        <input
          type="text"
          className="form-control"
          name="category"
          placeholder="category"
          aria-label="category"
          value={report.category}
          onChange={changeHandle}
        />
      </div>
      <div className="col-3">
        <h6>
          {/* Amount input field */}
          <u>Amount;</u>
        </h6>
        <input
          type="text"
          className="form-control"
          name="amount"
          placeholder="amount"
          aria-label="amount"
          value={report.amount}
          onChange={changeHandle}
        />
      </div>

      <div className="col-12 d-flex justify-content-center">
        <button type="submit" onClick={submitHandle} className="btn btn-info">
          {/* Add Transaction button */}
          Add Transaction
        </button>
      </div>
    </div>
  );
}