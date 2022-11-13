import React from 'react';
// import { useNavigate } from 'react-router-dom';

const VideoItem = ({ videoItem, videoItem: { snippet }, selectVideo, setSelectedVideo }) => {
    const { channelTitle, title, publishedAt, thumbnails } = snippet;
    const flexStatus = setSelectedVideo ? 'flex ' : 'flex-col';
    const imgStatus = setSelectedVideo ? 'w-2/4 h-full' : 'w-4/4';  
    // const navigate = useNavigate();
    const onClick = () => {
        // navigate('/detail',{state: {videoItem}});
        // console.log(navigate);
        selectVideo(videoItem);
    };
    return(
        <li onClick={onClick} className={`w-full py-0.5 px-0.5 cursor-pointer basis-1/4 ${flexStatus}`}>
            <img className={imgStatus} src={thumbnails.medium.url} alt='img'/>
            <div>
            <h1 className='text-sm pt-1'>{title}</h1>
            <p className='text-xs pt-1 pb-1 opacity-50'>{channelTitle}</p>
            <p className='text-xs  pb-1 opacity-50'>{publishedAt}</p>
            </div>
        </li>
    );
};

export default VideoItem;