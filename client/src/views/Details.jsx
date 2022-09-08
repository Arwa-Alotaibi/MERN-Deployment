import React from 'react'
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from "react-router-dom";
import { useHistory } from "react-router-dom";

const Detail = () => {
    const [pets, setpets] = useState({})
    const {id} = useParams()
    const history = useHistory();

    const handleDelete = (id) =>{
        axios.delete("http://localhost:8000/api/delete/"+id)
        .then(res => history.push('/'))
        
        .catch(err => console.error(err))
    }
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/pets/'+id)
            .then(res => setpets(res.data) )
            .catch(err => console.error(err));
    }, [id]);
    return (
        <div>
            <Link to='/'>back to home</Link>

            <h1>pet shelter </h1>
            <h1>  details about: {pets.name}</h1>
            <h1>pet type:{pets.pettype}</h1>
            <p>description {pets.petdescription}</p>
            <p>skills: {pets.skiilsne}
            {pets.skiilstwo}
            {pets.skiilsthree} 
            </p>

            <button onClick={()=>{handleDelete(pets._id)}}>Adopt Garfield</button>
            

            


        </div>
    )
}
    
export default Detail;

