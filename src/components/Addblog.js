import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

export default function Addblog() {
    const navigate = useNavigate();
    let allBlogs;
    let sno;
    

    function saveToLocalStorage(title,categories,content){
        if(localStorage.getItem("blogs")===null){
            allBlogs=[];
            sno = 0;
        }else{
            allBlogs=JSON.parse(localStorage.getItem("blogs"));
            if (allBlogs.length === 0) {
                sno = 0;
              }
              else {
                sno = allBlogs[allBlogs.length - 1].sno + 1;
              }
        }
        let newBlog={sno:sno,title:title,categories:categories,content:content,likes:0};
        allBlogs.push(newBlog)
        localStorage.setItem("blogs", JSON.stringify(allBlogs));

    }
    const saveBlog = (event) => {
        event.preventDefault();
       
        let title=document.getElementById("title").value;
        let categories=document.getElementById("categories").value;
        let content=document.getElementById("content").value;
        
        saveToLocalStorage(title,categories,content);
        alert("Added Sucessfully !!!")
        navigate('/');
      };


  return (
    <div className='container'>
        <div className='row'>
            <div className='col col-8 offset-2 text-center'>
            <h4>Add Your Blog</h4>
            </div>
            
        </div>

        <div className='row'>
            <div className='col'>
            <Link to="/home"><button className='btn btn-lg btn-outline-primary' type='submit'>Back</button></Link>
            </div>
            
        </div>

        <div className='row'>
            <div className='col col-8 offset-2'>
                <form onSubmit={saveBlog}>
                    <div className="form-group">
                        <label htmlFor='title'>Title</label>
                        <input type="text" required className="form-control" id="title"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor='categories'>Category</label>
                        <input type="text"required className="form-control" id="categories"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor='content'>Content</label>
                        <textarea required className="form-control" id="content" rows="3"></textarea>
                    </div>
                    <div className="form-group mt-2 text-center">
                        <button className='btn btn-lg btn-outline-primary' type='submit'>Add</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
