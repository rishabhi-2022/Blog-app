import React from 'react'
import {useNavigate} from 'react-router-dom';
export default function BlogRow({blog}) {
    let navigate = useNavigate();
    return (
        <tr>
            <td>
                <div className="card w-70 ">
                    <div className="card-body">
                        <h2 className="card-title">{blog.title}</h2>
                        <p>{blog.content.substring(0, 140)}</p>
                        <button type="button" onClick={() => navigate('/viewblog', { state: blog })} className="btn btn-sm btn-success">View</button>
                    </div>
                </div>
            </td>
        </tr>
    )
}
