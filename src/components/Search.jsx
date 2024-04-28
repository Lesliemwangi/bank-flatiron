function Search({ setTransactions, goods}) {
  function changeHandle (e){
     const info = e.target.value;
    if (info.length > 0) {
      const filter = goods.filter((currency) => {
        return currency.description.toLowerCase().includes(info.toLowerCase());
      });
      if (filter.length > 0) {
        setTransactions(filter);
      }
    } else {
      setTransactions(goods);
    } 
  }

  return (
    <div style={{ display: "block", paddingBottom: "10px" }}>
      <input
        className="form-control"
        type=""
        placeholder="search description"
        onChange={changeHandle}
      />
      

    </div>
  );
}

export default Search;
