import React, { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
import { MyContext } from "../components/context.js";
import BlogRow from './BlogRow.js';
// import Viewblog from './Viewblog.js';

export default function Allblogs() {
    let allBlogs = useContext(MyContext);
    let length = allBlogs.length;
  

    return (
        <table className="table table-bordered table-striped mt-3">
            <tbody>
                {length === 0 ? <h3>NO BLOGS HERE</h3> : allBlogs.map((blog) => {
                    return (
                        <BlogRow blog={blog} key={blog.sno}></BlogRow>
                    )
                })}
            </tbody>
        </table >
    )
}
