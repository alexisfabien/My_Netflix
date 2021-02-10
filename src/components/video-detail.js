import React from 'react';

const VideoDetail = (props) => {
    const title = props.title;
    const overview = props.overview;
    const date = props.date;

    return(
        <div className='video-details'>
            <h1>{title}</h1>
            <p>{overview}</p>
            <p> Date de sortie : {date} </p>
        </div>
    )
}

export default VideoDetail;