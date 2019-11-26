import React, {useEffect, useState} from 'react';
import Log_Data from "./Log_Data";
import { Link } from 'react-router-dom';

export default function Post(props) {
    const [post, setPost] = useState({
        logid: "",
        id: "",
        date: "",
        stuff: <p> </p>
    });

    let year = props.match.params.year;
    // let id = props.match.params.id;

    useEffect(() => {
        for(let i=0; i < Log_Data.length; i++){
            if(Log_Data[i].logs !== undefined){
                for (let j=0; j < Log_Data[i].logs.length; j++){
                    if(props.match.params.id===Log_Data[i].logs[j].logid){
                        setPost({
                            logid: Log_Data[i].logs[j].logid,
                            id: Log_Data[i].logs[j].id,
                            date: Log_Data[i].logs[j].date,
                            stuff: Log_Data[i].logs[j].stuff
                        });
                    }
                }
            }
        }
    }, []);

    // console.log(post);
    // console.log('Year:' + year + '  |  ' + 'Log ID: ' + id);

    return (
        <div className="container">
          <div className="list-wrapper list-item " key={post.logid}>
            <h2 className="center">{post.date}</h2>
            {post.stuff}<br/>
            <Link to={`/log/${year}`}>Back</Link>
          </div>
        </div>
    )
}