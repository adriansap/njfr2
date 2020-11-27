import React, { useState } from "react";
// import _ from 'lodash';
// import Orderalpha from './Orderalpha'
import { Redirect } from 'react-router-dom'
import { Link } from "react-router-dom";




// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function List(props) {
  const [queryValue, setValue] = useState('') //until setValue sets a value, queryValue = ''

  // const thingy = { 1: '10', 2: '20', 3: '30', 4: '40' }
  // const thingy2 = { a: '1', b: '2', 1: '100' }
  // const thing = [...thingy, 6,7,8] // [10,20,30,40,6,7,8]
  // console.log("fancy", { ...thingy2, ...thingy })
  // const state = useState('')
  // const queryValue = state[0];
  // const setValue = state[1];

  console.log("props.employees[0].image" + props.employees[0].image)

  return (
    <div class="md-form active-pink active-pink-2 mb-3 mt-0">
      <h1>New Jersey Listings | Text 862.295.1705 about any listing</h1>
      <input onChange={event => setValue(event.target.value)} class="form-control" type="text" placeholder="Street, City or Zipcode" aria-label="Search"></input>




      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <Link to="/Orderalpha">
              <th scope="col">Address</th>
            </Link>
            <th scope="col">Monthly rent</th>
            <th scope="col">Contact info</th>
            <th scope="col">Description</th>

          </tr>
        </thead>
        <tbody>


          {props.employees.filter(name => name.DOB.toLowerCase().includes(queryValue)).map(filteredName => (

            <tr>
              <th scope="row"></th>
              <td><img src={filteredName.image} alt="profilepic"></img></td>
              <td>{filteredName.name}</td>
              <td>{filteredName.phone}</td>
              <td>{filteredName.email}</td>
              <td>{filteredName.DOB}</td>
            </tr>
          ))}


        </tbody>
      </table>
    </div >
  );
}

export default List;



