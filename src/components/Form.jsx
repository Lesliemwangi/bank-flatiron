import { useState } from "react";
export default function Form({transactions, setTransactions }) {
  const [report, setReport] = useState({
    date:"",
    description:"",
    category:"",
    amount:""
  });

  function submitHandle(e){
    console.log(report);
    e.preventDefault()
    if (report.date && report.description && report.category && report.amount) {
    setTransactions([... transactions, report])
  }
}

  function changeHandle(e) {
    console.log(e.target.value);
    setReport({
      ...report,
      [e.target.name]: e.target.value
    })
  }
  return (
    <div className="row border">
      <div className="col-3">
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
        <input
          type="number"
          className="form-control"
          name="amount"
          placeholder="amount"
          aria-label="amount"
          value={report.amount}
          onChange={changeHandle}
        />
      </div>

      <div className="col-12">
        <button type="submit" onClick={submitHandle}>Add Transaction</button>
      </div>
    </div>
  );
}
