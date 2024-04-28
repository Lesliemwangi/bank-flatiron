function Search({ setTransactions, goods}) {
  function handleChange (e){
     const info = e.target.value;
    if (info.length > 0) {
      const filter = goods.filter((currency) => {
        return currency.description
          .toLowerCase()
          .includes(info.toLowerCase());
      });
      if (filter.length > 0) {
        setTransactions([...filter]);
      } else {
        setTransactions([...goods]);
      } 
    }
  }

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <input className="form-control" type="" placeholder="search" onChange={handleChange} />
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
