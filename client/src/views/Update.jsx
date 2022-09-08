import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {useParams, useHistory} from 'react-router-dom'

import {Link} from "react-router-dom";

const Update=()=> {

    const[name,setname]= useState('')

    const[pettype,setpettype]= useState('')

    const[petdescription , setpetdescription] =useState('')

    const[skiilsne ,setskiilsne] = useState('')

    const[skiilstwo , setskiilstwo] = useState('')

    const[skiilsthree ,setskiilsthree] = useState('')

    const history = useHistory();
    const {id} = useParams();
    const[error, setError] = useState([])


    useEffect( ()=>   {
        axios.get("http://localhost:8000/api/"+id)
        .then(res => {
            setname(res.data.name) 
             setpettype(res.data.pettype)
             setpetdescription(res.data.petdescription)

             setskiilsne(res.data.skiilsne)

             setskiilstwo (res.data.skiilstwo)
             setskiilsthree(res.data.skiilsthree)

        })
        .catch(err => console.error(err))
    },[id])
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/pets/'+id +'/edit', {
            name , pettype ,petdescription , skiilsne ,skiilstwo, skiilsthree

        })
            .then(res=> history.push("/"))
            .catch(err=> {
                console.log(err.response.data.errors)
                const errorObj = err.response.data.errors
                let errArr = []
                for (const key of Object.keys(errorObj)){
                    errArr.push(errorObj[key].message)
                }
                setError(errArr)
            })      }
    return (
        <>
        <h1>pet shelter </h1>
        <Link to='/'>back to home</Link>

        <h1>Pet Shelter</h1>
        <h1>Edit </h1>

        <form onSubmit={onSubmitHandler}>
        {error.map((error,i) => <p key={i}>{error}</p>)}
            <p>
                <label> pet Name:</label><br/>
                <input type="text" onChange={(e)=>setname(e.target.value)} value={name} />
            </p>

            <p>
                <label> pet type:</label><br/>
                <input type="text" onChange={(e)=>setpettype(e.target.value)} value={pettype}  />
            </p>

            <p>
                <label> pet escription:</label><br/>
                <input type="text" onChange={(e)=>setpetdescription(e.target.value)} value={petdescription}/>
            </p>

            <p>
                <label> skills one:</label><br/>
                <input type="text" onChange={(e)=>setskiilsne(e.target.value)} value={skiilsne} name= 'skiilsne'/>
            </p>


            <p>
                <label> skills two:</label><br/>
                <input type="text" onChange={(e)=>setskiilstwo(e.target.value)} value={skiilstwo} name='skiilstwo'/>
            </p>


            <p>
                <label> skills three:</label><br/>
                <input type="text" onChange={(e)=>setskiilsthree(e.target.value)} value={skiilsthree} name='skiilsthree'/>
            </p>


            <input type="submit" value='Edit Pet'/>
        </form>
        </>
        
    )
}

export default Update;