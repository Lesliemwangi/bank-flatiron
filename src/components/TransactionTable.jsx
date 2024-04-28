import Table from "../components/Table";

function TransactionTable({ transactions }) {
  return (
    <table className="table table-success table-striped">
      <thead>
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Description</th>
          <th scope="col">Category</th>
          <th scope="col">Amount</th>
        </tr>
      </thead>
      <Table transactions={transactions} />
      <tbody></tbody>
    </table>
  );
}

export default TransactionTable;
