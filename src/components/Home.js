import React from 'react';
import Allblogs from './Allblogs';
import {
    Link
} from "react-router-dom";
import {MyContext} from"./context.js"

export default function Home() {
    var allBlogs;
    if(localStorage.getItem("blogs")===null){
        allBlogs=[];
    }
    else{
        allBlogs=JSON.parse(localStorage.getItem("blogs"));
    }

    

    return (
        
            <div className="container">
                <div className="container text-right mt-2" >
                <Link to="/addblog"> <button class="btn btn-lg btn-outline-primary" type="submit">Add Blog</button></Link> 
                </div>
                <hr></hr>
                <div className="container text-center mt-2">
                    <h5>Blogs</h5>
                </div>
                <div className="container">
                    <MyContext.Provider value={allBlogs}>
                        <Allblogs></Allblogs>
                    </MyContext.Provider>
                    
                </div>

            </div >
       
        
    )
}

