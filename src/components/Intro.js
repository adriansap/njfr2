import React, { useState, useEffect } from "react";
// import _ from 'lodash';
// import Orderalpha from './Orderalpha'
import { Redirect } from 'react-router-dom'
import { Link } from "react-router-dom";


function Intro() {
    return (
        <div>
            {/* <Link to="/List"><th scope="col">Restaurant Managers |</th> </Link><Link to="/"><th>Job Seekers</th></Link> */}

            <h1> New Jersey For Rent .COM</h1>

            <p>Coming out of state and looking to relocate to Garden State? Look no further.</p>
            <Link to="/List"><th scope="col">Search our listings</th> </Link>  
            <Link to="/Stripecode"><th scope="col">Purchase Application For Rental</th></Link>       
{/*             
               <form action="https://submit-form.com/GGCaFc40HpAj2r4OPjTVd" target="_self">



                <input type="text" name="name" placeholder="name"></input> <br></br>
                <p></p>
                <input type="text" name="phone" placeholder="phone number"></input> <br></br>
                <p></p>
                <input type="text" name="email" placeholder="email"></input> <br></br>
                <p></p>
                <button type="submit">Submit</button>
            </form> */}
            <footer>© 2020 newjerseyforrent.com </footer>
        </div>
    )

}


export default Intro;





