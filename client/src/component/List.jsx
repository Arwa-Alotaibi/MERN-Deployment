import React from 'react'
import { Link } from "react-router-dom";


const List = (props) => {
    
    
    return (
        <>
            <h1>pet shelter </h1>
            <Link to='/pets/new'>Add a pet to the shelter</Link>
            <h4>these pets are looking for a good hoome </h4>
            <table >
                <tr>
                    <th>Name</th>
                    <th>type</th>
                    <th>actions</th>
                </tr>
                {props.allpets.map((pets, i) =>
                    <tr>
                        <td key={i}>{pets.name} </td>
                        <td key={i}>{pets.pettype} </td>
                        <td>
                        <Link to={'/pets/'+pets._id}>details</Link> #
                        <Link to={"/pets/" + pets._id+ '/edit' }>Edit</Link>  
                        </td>
                    </tr>
                )}
            </table>

        </>

    );
}

export default List;





