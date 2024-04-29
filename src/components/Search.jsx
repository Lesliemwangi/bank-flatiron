// A functional component in React.js named 'Search' that takes in two props:
// 'setTransactions' (a function to update the state of transactions) and 'goods' (an array of transaction objects).
function Search({ setTransactions, goods }) {
  // A function 'changeHandle' that takes an event object 'e' as a parameter.
  function changeHandle(e) {
    // Store the input value from the event object in the 'info' variable.
    const phase = e.target.value;

    // If the input value is not empty, filter the 'goods' array based on the input value.
    if (phase.length > 0) {
      // Filter the 'goods' array based on the input value.
      const filter = goods.filter((currency) => {
        // Check if the 'description' property of each 'currency' object includes the input value.
        return currency.description.toLowerCase().includes(phase.toLowerCase());
      });

      // If the filtered array has a length greater than 0, update the 'transactions' state with the filtered array.
      if (filter.length > 0) {
        setTransactions(filter);
      }
    } else {
      // If the input value's length is 0, update the 'transactions' state with the original 'goods' array.
      setTransactions(goods);
    }
  }

  // Render the input element with necessary attributes and event listener.
  return (
    <div style={{ display: "block", paddingBottom: "10px" }}>
      <input
        className="form-control"
        type="text"
        placeholder="search description"
        onChange={changeHandle}
      />
    </div>
  );
}

// Export the 'Search' component as the default export.
export default Search;
