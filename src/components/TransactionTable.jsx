import Table from "../components/Table";

// A functional component in React that renders a table of transactions
function TransactionTable({ transactions }) {
  // Return a table element with table head and table body
  return (
    <table className="table table-info table-striped">
      <thead>
        <tr>
          <th scope="col">
            <u>Date</u>
          </th>
          <th scope="col">
            <u>Description</u>
          </th>
          <th scope="col">
            <u>Category</u>
          </th>
          <th scope="col">
            <u>Amount</u>
          </th>
        </tr>
      </thead>
      <tbody>
        {/* Utilize the Table component to render the transaction data */}
        <Table transactions={transactions} />
      </tbody>
    </table>
  );
}

export default TransactionTable;
