import Table from "../components/Table";

// A functional component in React that renders a table of transactions
function TransactionTable({ transactions }) {
  // Return a table element with table head and table body
  return (
    <table className="table table-info table-striped">
      <thead>
        <tr>
          <th scope="col">
            <b>
              <u>Date</u>
            </b>
          </th>
          <th scope="col">
            <b>
              <u>Description</u>
            </b>
          </th>
          <th scope="col">
            <b>
              <u>Category</u>
            </b>
          </th>
          <th scope="col">
            <b>
              <u>Amount</u>.
            </b>
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
