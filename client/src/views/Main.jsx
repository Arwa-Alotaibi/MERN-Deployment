import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'


import List from '../component/List'

const Main = () =>{
    const [allpets, setallpets] = useState([])
    useEffect( ()=>   {
        axios.get("http://localhost:8000/api")
        .then(res => setallpets(res.data))
        .catch(err => console.error(err))
    },[allpets])

    return (
        <>
        <List allpets={allpets} />
        </>
    );
}
export default Main;