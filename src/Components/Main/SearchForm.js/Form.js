import React from 'react';
import { useDataLayerValue } from '../../../DataLayer/DataLayer';
import "./form.css";
import Axios from "axios";
import ResultPage from '../../ResultPage/ResultPage';

function Form() {
    const [formInput,setFormInput]=React.useState("");
    const [{input},dispatch] = useDataLayerValue();

  const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch({
        type:"SET_INPUT",
        input:formInput,
    })
}
    

React.useEffect(()=>{
    async function fetchData(){
            const request = await Axios.get(`https://api.github.com/users/${input}`);
            dispatch({
                type:"SET_GITHUB_USERINFO",
                git_info:request,
            })
            return request;
        }

        fetchData();
     
     
 
},[input])


    return (
        <>
             { !input ? 
             <form className="search__bar" onSubmit={handleSubmit}>
                 <h1>Search your github using github ID</h1>
                <input type="text" name="" id="" value={formInput.inputVal} onChange={e=>setFormInput(e.target.value)} />
                <button type="submit"><i className="fas fa-search"></i></button>
                
            </form>:<ResultPage/>}
        </>
    )
}

export default Form
