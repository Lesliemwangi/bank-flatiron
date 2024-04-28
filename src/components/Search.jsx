function Search() {
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <input className="form-control" type="" />
      <button
        className="btn btn-primary"
        style={{ position: "absolute", top: 0, right: 0 }}
      >
        Search
      </button>
    </div>
  );
}

export default Search;
