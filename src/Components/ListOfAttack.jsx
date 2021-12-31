import React from "react";
import { Link } from "react-router-dom";
export default function ListOfAttack(props) {
  console.log("Data is : ", props.list);
  props.list.forEach((item) => {
    console.log("Data of Indexes : ", item.Id, item.name);
  });
  const getList = () => {
    let list = [];
    props.list.forEach((item, index) => {
      list.push(
        <tbody>
          <tr className="tr">
            <th scope="row">{index + 1}</th>
            <td>{item.Id}</td>
            <td>{item.name}</td>
            <td>{item.Strategy}</td>
            <td>{item.NoOfPerson}</td>
          </tr>
        </tbody>
      );
    });

    return list;
  };
  return (
    <div className="App table">
      <h2>Armies Who Attack In A Sequence</h2>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Strategy</th>
            <th scope="col">NoOfUnits</th>
          </tr>
        </thead>
        {getList()}
      </table>
      <div className="back">
        <Link to="/">
          <p>back To Battle Page</p>
        </Link>
      </div>
    </div>
  );
}
