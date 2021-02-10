import React from 'react';

const VideoListItem = (props) => {
const movie = props.movie;
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500/';
// console.log('moviemoviemoveee', movie)

    return(
        <li className = 'list-group-left' onClick={handleClick}>
            <div className = 'media'>
                <div className = 'media-left'>
                    <li><img width='100px' height= '100px' className='media-object img-rounded' src={`${IMAGE_URL}${movie.poster_path}`} alt=''/></li>
                </div>
                <div className = 'media-body'>
                    <li className= 'title_liste_item'>{movie.title}</li>
                </div>
            </div>
        </li>
    )

    function handleClick() {
        console.log('------');
        console.log('---Je suis la---');
        console.log('------');
        props.callBack(movie);
    }
}

export default VideoListItem;