import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');
    const [author,setAuthor]=useState('zeyad');
    const history=useHistory();
    const [isPending,setIsPending]=useState(false);
    const handleSubmit=(e)=>{
        e.preventDefault();
        const blog={title,body,author};
        setIsPending(true);
        fetch('http://localhost:8000/blogs',{
            method:'POST', 
            headers: {"Content-Type":"application/json"}
            ,body:JSON.stringify(blog)

        }).then(()=>{
            history.push('/');
        })
        
    }




    return (  
        <div className="add">
            <h2>Add a new Blog</h2>
            <form >
                <label>Blog Title:</label>
                <input type="text" 
                required
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                
                />
                 <label>Blog body:</label>
                 <textarea required
                 value={body}
                 onChange={(e)=>setBody(e.target.value)}
                
                
                
                ></textarea>
                 <label>Blog author:</label>
                 <select 
                 value={author}
                 
                 onChange={(e)=>setAuthor(e.target.value)}
                 
                 >
                     <option value="zeyad">zeyad</option>
                     <option value="sergio">serio</option>
                     <option value="ramy">ramy</option>


                 </select>
                 { !isPending&& <button onClick={handleSubmit}>Add blog</button>}
                 


                 <p>{title}</p>
                 <p>{body}</p>
                 <p>{author}</p>
                

            </form>


        </div>
    );
}
 
export default Create;
