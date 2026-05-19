import React from 'react';

//props = {hasComments,longComment}
export const Comments = ({hasComments,longComment}) => {

    return (
        <div id='comments'>
            {hasComments ?
                <h2>Comments:</h2> :
                <p>No Comments here</p>}


            {longComment &&
                <h3>We have a long comment present</h3>}

        </div>
    )
}

//&& T ^ T = T
// if(uslov){izvrsi ova}
//else{izvrsi nesto drugo}
// uslov ? izvrsi ova ako e tocno : ako e netcno izvrsi ova
// 