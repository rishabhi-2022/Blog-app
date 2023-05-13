import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function EditBlog() {
    let navigate=useNavigate();
    const location = useLocation();
    function editBlog(title, categories, content) {
        let editedBlog={
            sno: location.state.sno,
            title:title,
            categories:categories,
            content:content,
            likes:location.state.likes
        }
        let allBlogs=JSON.parse(localStorage.getItem("blogs"));
        let allBlogAfterEdit=allBlogs.filter((e) => {
            return e.sno !== location.state.sno;
        });
        
        allBlogAfterEdit.push(editedBlog);
        
        localStorage.setItem("blogs",JSON.stringify(allBlogAfterEdit));
        alert("Item Edited")
        
    }

    const submit = (e) => {
        e.preventDefault();
        if (!title || !content || !categories) {
            alert("Title or Description cannot be blank");
        }
        else {
            editBlog(title, categories, content);
            navigate('/');
        }
    }


    
    var currentBlog = {
        sno: location.state.sno,
        title: location.state.title,
        categories: location.state.categories,
        content: location.state.content,
        likes:location.state.likes
    };

    const [title, setTitle] = useState(currentBlog.title);
    const [categories, setCategories] = useState(currentBlog.categories);
    const [content, setContent] = useState(currentBlog.content);


    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col col-8 offset-2 text-center'>
                        <h4><i>EDIT Blog</i></h4>
                    </div>

                </div>
                <div className='row'>
                    <div className='col col-8 offset-2'>
                        <form onSubmit={submit}>
                            <div className="form-group">
                                <label htmlFor='title'>Title</label>
                                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                                <label htmlFor='categories'>Categories</label>
                                <input type="text" value={categories} onChange={(e) => setCategories(e.target.value)} className="form-control" id="desc" />
                            </div>
                            <div className="form-group">
                                <label htmlFor='content'>Content</label>
        
                                <textarea required value={content} onChange={(e) => setContent(e.target.value)} className="form-control" id="content" rows="3"></textarea>
                            </div>
                            <div className="form-group mt-2 text-center">
                                <button className='btn btn-lg btn-outline-dark' type='submit'>Edit Blog</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
