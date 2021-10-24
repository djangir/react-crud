import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
function Read () {

  let [ jsonData, setJsonData ] = useState([]);

  useEffect(() => {
    let pageNo = 1;
    fetch(`https://gorest.co.in/public/v1/users?page=${ pageNo }`)
      .then(response => response.json())
      .then(json => setJsonData(json.data));
  }, []);
  console.log(jsonData);
  return (
    <>
      <div className="p-3 bg-dark">
        <table className="table table-primary table-striped p-2 my-3">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Status</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            { jsonData.map((data, index) => {
              return (
                <tr key={ index }>
                  <th scope="row">{ index + 1 }</th>
                  <td>{ data.name }</td>
                  <td>{ data.email }</td>
                  <td>{ data.status }</td>
                  <td>Edit</td>
                  <td>Delete</td>
                </tr>
              );
            }) }
          </tbody>
        </table>
      </div>
      <br />
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">

          <li className="page-item">
            <button className="page-link">&laquo;</button>
          </li>
          <li className="page-item">
            <button className="page-link">1</button>
          </li>
          <li className="page-item">
            <button className="page-link">2</button>
          </li>
          <li className="page-item">
            <button className="page-link">3</button>
          </li>
          <li className="page-item">
            <button className="page-link">&raquo;</button>
          </li>
        </ul>
      </nav>
      <br />
      <br />
      <br />
    </>
  );
}

export default Read;;