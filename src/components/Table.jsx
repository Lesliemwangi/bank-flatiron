
// Function component 'Table' receives 'transactions' as a prop
function Table({ transactions }) {
  // Use 'map' to iterate through 'transactions' array and return a new array of table rows
  const item = transactions.map((currency, index) => {
    // Destructure 'currency' object to access its properties
    const { date, description, category, amount } = currency;

    // Return a table row for each transaction with its corresponding data
    return (
      <tr key={index + 1}>
        <td>{date}</td>
        <td>{description}</td>
        <td>{category}</td>
        <td>{amount}</td>
      </tr>
    );
  });

  // Return the table rows wrapped in a fragment
  return <>{item}</>;
}

// Export the 'Table' component
export default Table;
