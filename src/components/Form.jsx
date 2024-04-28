import { useState } from "react";

export default function Form({ transactions, setTransactions }) {
  const [report, setReport] = useState({
    date: "",
    description: "",
    category: "",
    amount: ""
  });

  function submitHandle(e) {
    e.preventDefault();
    console.log(report);
    if (report.date && report.description && report.category && report.amount) {
      setTransactions([...transactions, report]);
    }
  }

  function changeHandle(e) {
    console.log(e.target.value);
    setReport({
      ...report,
      [e.target.name]: e.target.value
    });
  }

  return (
    <div className="row border" style={{ paddingBottom: "10px" }}>
      <div className="col-3">
        <h6 >Date;</h6>
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
        <h6>Description;</h6>
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
        <h6>Category;</h6>
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
        <h6>Amount;</h6>
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
        <button
          type="submit"
          onClick={submitHandle}
          className="btn btn-primary"
        >
          Add Transaction
        </button>
      </div>
    </div>
  );
}