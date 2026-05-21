import React from 'react';

export const Comments = ({comments}) => {
    return (
        <div id='comments'>
            {comments.map((comment,i)=>{
                return(
                    <div key={comment.id}>
                        {comment.author === 'Filip' ? <h3>Author: {comment.author} </h3> : <p>No Known Author</p> }
                        <p style={{color: comment.author === 'Simona' ? 'red' : 'blue'}}>Comment:{comment.content} </p>
                    </div>
                )
            })}
        </div>
    )
}