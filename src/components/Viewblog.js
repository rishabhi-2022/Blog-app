import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

export default function Viewblog() {

    const navigate = useNavigate();
    const location = useLocation();
    var currentBlog = {
        sno: location.state.sno,
        title: location.state.title,
        categories: location.state.categories,
        content: location.state.content,
        likes: location.state.likes
    };


    const [like, setLike] = useState(location.state.likes);

    let allBlogs=JSON.parse(localStorage.getItem("blogs"));
    let l=like;

    useEffect(() => {
        let updateBlog={
            sno:location.state.sno,
            title: location.state.title,
            categories: location.state.categories,
            content: location.state.content,
            likes:like
        }

        let allBlogAfterEdit=allBlogs.filter((e) => {
            return e.sno !== location.state.sno;
        });
        

        allBlogAfterEdit.push(updateBlog);
        allBlogs=allBlogAfterEdit;
        
        localStorage.setItem("blogs", JSON.stringify(allBlogs));
    })
    
    function doLike() {
        if (like === 0) {
            setLike(1)  
        } else {
            setLike(0)  
        }
    }

    function deleteBlog(currentBlog) {
        // console.log(currentBlog)
        let allBlogs = JSON.parse(localStorage.getItem("blogs"));
        // console.log(allBlogs);
        let afterDelete = JSON.stringify(allBlogs.filter((e) => {
            return e.sno !== currentBlog.sno;
        }));
        localStorage.setItem("blogs", afterDelete)
        navigate("/")
    }



    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col col-10 offset-2'>
                        <tr>
                            <td>
                                <div className="card w-70">
                                    <div className="card-body">
                                        <h2 className="card-title">{currentBlog.title}</h2>
                                        <h5>{currentBlog.categories}</h5>
                                        <p>{currentBlog.content}</p>
                                        
                                        <button type="button" onClick={() => doLike()} className="btn btn-sm ms-2 btn-primary"><FontAwesomeIcon icon={faThumbsUp} />{l}</button>
                                        <button type="button" onClick={() => deleteBlog(currentBlog)} className="btn btn-sm ms-2 btn-danger">Delete</button>
                                        <button type="button" onClick={() => navigate('/editblog', { state: currentBlog })} className="btn btn-sm ms-2 btn-success">Edit</button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </div>
                </div>
            </div>

        </>
    )
}
