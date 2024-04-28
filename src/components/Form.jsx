export default function Table() {
  return (
    <div className="row">
      <div className="col-3">
        <input
          type="date"
          className="form-control"
          placeholder="date"
          aria-label="date"
        />
      </div>
      <div className="col-3">
        <input
          type="description"
          className="form-control"
          placeholder="description"
          aria-label="description"
        />
      </div>
      <div className="col-3">
        <input
          type="text"
          className="form-control"
          placeholder="category"
          aria-label="category"
        />
      </div>
      <div className="col-3">
        <input
          type="number"
          className="form-control"
          placeholder="amount"
          aria-label="amount"
        />
      </div>
    </div>
  );
}
