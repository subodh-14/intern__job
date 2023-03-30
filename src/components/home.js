import React, { useEffect, useState } from 'react'
import Form1 from './Form/form1'
import JobCard from './jobCard';
import axios from 'axios';

const Home = () => {
    const [form, setForm] = useState(false);
    const [data,setData]=useState();
    const handleClick = () => {
        setForm(!form);
    }
    useEffect(()=>{
       axios.get('https://642596ad9e0a30d92b366502.mockapi.io/api/v1/mockdata')
        .then(response=>{
            console.log("data received",response);
            setData(response.data);
        })
        .catch((error)=>{
            console.log("error is received",error);
        });
        
    },[]);


    useEffect(()=>{
        setData(data);
    },[data]);
    

    return (
        <div>
            <button className=" m-2 bg-blue-500 text-white font-bold py-2 px-4 rounded"
                onClick={handleClick}>Create Job</button>
            {form && <Form1 />}
            <div>
            <JobCard
                job={data}
            />
            </div>

        </div>
    )
}

export default Home