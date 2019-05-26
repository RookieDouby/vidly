import React from 'react';
import './like.scss'

//input  liked:boolean

const Like = (props) => {
    let heartClass = "fa hover-icon fa-heart";
    if(!props.movie.liked) heartClass += '-o';
    return ( 
        <i
            className={heartClass}
            onClick={() => props.onLike(props.movie)}
            aria-hidden="true"
        >
        </i>
     );
}

export default Like;