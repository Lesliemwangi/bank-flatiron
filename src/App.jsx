import { useState } from "react";
import "../src/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../src/components/Header";
import Search from "../src/components/Search";
import Form from "../src/components/Form";
import TransactionTable from "../src/components/TransactionTable";

function App() {
  const goods = [
    {
      date: "2023-05-16",
      description: "Play",
      category: "Entertainment",
      amount: "150 Pounds",
    },
    {
      date: "2023-06-20",
      description: "Sushi",
      category: "Food",
      amount: "100 Pounds"
    },
    {
      date: "2023-07-25",
      description: "Maxi Dress",
      category: "Clothing",
      amount: "200 Pounds",
    },
    {
      date: "2023-08-15",
      description: "Air Jordans",
      category: "Clothing",
      amount: "250 Pounds",
    },
    {
      date: "2023-09-02",
      description: "Oreo Cake",
      category: "Food",
      amount: "150 Pounds",
    },
    {
      date: "2023-10-18",
      description: "Play",
      category: "Entertainment",
      amount: "100 Pounds",
    },
    {
      date: "2023-11-02",
      description: "Rent",
      category: "Housing",
      amount: "1,000 Pounds",
    },
    {
      date: "2023-12-25",
      description: "Christmas Gifts",
      category: "Gifts",
      amount: "1,500 Pounds",
    },
    {
      date: "2024-01-01",
      description: "Family Outing",
      category: "Entertainment",
      amount: "1,000 Pounds",
    },
    {
      date: "2024-02-10",
      description: "School Fees",
      category: "Fees",
      amount: "1,500 Pounds",
    },
  ];

  const [transactions, setTransactions] = useState(goods);

  return (
    <div className="">
      <Header />
      <Search
        transactions={transactions}
        setTransactions={setTransactions}
        goods={goods}
      />
      <Form />
      <TransactionTable transactions={transactions} />
    </div>
  );
}

export default App;
