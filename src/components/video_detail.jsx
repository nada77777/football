import React from 'react';
// import { useLocation } from 'react-router-dom';

const VideoDetail = ({ selectedVideo ,selectedVideo: {snippet} }) => {
    const { channelTitle, title, publishedAt, thumbnails, description } = snippet
    // const location = useLocation();
    // console.log(location);

    // const { channelTitle, description, publishedAt, tags, thumbnails, title } = location.state.videoItem.snippet;

    return(
        <div className='w-full pt-5 px-1.5'>
            <iframe id="existing-iframe-example"
            width="100%" height="600"
            title='iframe'
            src={`https://www.youtube.com/embed/${selectedVideo.id}`}
            frameBorder="0"
            ></iframe>
            <div className='py-3'>
                <h1>{title}</h1>
                <span className='flex items-center py-5'>
                    <img className='rounded-full w-12 h-12' alt='logo' src={thumbnails.medium.url}></img>
                    <h1 className='pl-5'>{channelTitle}</h1>
                </span>
                <h2>{description}</h2>
            </div>
        </div>
    );
};


//padding: 20px 6px 0 6px;
//padding: 12px 0;
//padding-left: 20px;

export default VideoDetail;