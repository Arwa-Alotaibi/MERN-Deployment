import React, { useState } from 'react'
import axios from 'axios';
import {Link} from "react-router-dom";
import { useHistory } from "react-router-dom";


const Createpet=(props)=>{
    //{name , pettype ,petdescription , skiilsne ,skiilstwo, skiilsthree}

    const[name,setname]= useState('')

    const[pettype,setpettype]= useState('')

    const[petdescription , setpetdescription] =useState('')

    const[skiilsne ,setskiilsne] = useState('')

    const[skiilstwo , setskiilstwo] = useState('')

    const[skiilsthree ,setskiilsthree] = useState('')
    const history=useHistory();
    const[error, setError] = useState([])


    
    const onSubmitHandler=e=>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/pets/new',{
            name , pettype ,petdescription , skiilsne ,skiilstwo, skiilsthree
        })
        .then(res=>history.push('/'))
        .catch(err=> {
            const errorObj = err.response.data.errors
            let errArr = []
            for (const key of Object.keys(errorObj)){
                errArr.push(errorObj[key].message)
            }
            setError(errArr)
        })    }
        return (
            <>
            <h1>pet shelter </h1>
            <Link to='/'>back to home</Link>
    
            <h1>know a pet needing home</h1>
    
            <form onSubmit={onSubmitHandler}>
            {error.map((error,i) => <p key={i}>{error}</p>)}
    
                <p>
                    <label> pet Name:</label><br/>
                    <input type="text" onChange={(e)=>setname(e.target.value)} value={name}/>
                </p>

                <p>
                    <label> pet type:</label><br/>
                    <input type="text" onChange={(e)=>setpettype(e.target.value)} value={pettype}/>
                </p>

                <p>
                    <label> pet escription:</label><br/>
                    <input type="text" onChange={(e)=>setpetdescription(e.target.value)} value={petdescription}/>
                </p>

                <p>
                    <label> skills one:</label><br/>
                    <input type="text" onChange={(e)=>setskiilsne(e.target.value)} value={skiilsne}/>
                </p>


                <p>
                    <label> skills two:</label><br/>
                    <input type="text" onChange={(e)=>setskiilstwo(e.target.value)} value={skiilstwo}/>
                </p>


                <p>
                    <label> skills three:</label><br/>
                    <input type="text" onChange={(e)=>setskiilsthree(e.target.value)} value={skiilsthree}/>
                </p>


                <input type="submit" value='addpet'/>
            </form>
            </>
        )
    }
    
    export default Createpet;

