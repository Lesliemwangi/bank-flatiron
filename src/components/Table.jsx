function Table({transactions}) {
  const item = transactions.map((currency, index) => {
    return (
      <tr key={index + 1}>
        <td>{currency.date}</td>
        <td>{currency.description}</td>
        <td>{currency.category}</td>
        <td>{currency.amount}</td>
      </tr>
    );
  });
  return(
    <>
    {item}
    </>
  )
}

export default Table;

