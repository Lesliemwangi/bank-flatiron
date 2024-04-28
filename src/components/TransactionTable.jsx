import Table from "../components/Table";

function TransactionTable({ transactions }) {
  return (
    <table className="table table-success table-striped">
      <thead>
        <tr>
          <th scope="col">
            <u>Date</u>
          </th>
          <th scope="col"><u>Description</u></th>
          <th scope="col"><u>Category</u></th>
          <th scope="col"><u>Amount</u></th>
        </tr>
      </thead>
      <Table transactions={transactions} />
      <tbody></tbody>
    </table>
  );
}

export default TransactionTable;
