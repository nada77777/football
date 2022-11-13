import React from 'react';
import VideoItem from './video_item';

const VideoItems = ({ videoItems, selectVideo, setSelectedVideo }) => {

    const flexState = setSelectedVideo ? 'flex-col' : 'flex';
    const widthState = setSelectedVideo ? 'w-2/5' : '';
    
    return(
        <section className={`bg-slate-600 ${widthState}`}>
            <ul className={`${flexState} flex-wrap`}>
                {videoItems.map(videoItem => (<VideoItem key={videoItem.id} videoItem={videoItem} selectVideo={selectVideo} setSelectedVideo={setSelectedVideo} />))}
            </ul>
        </section>
    );
};

export default VideoItems;