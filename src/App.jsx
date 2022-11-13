import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
import Header from './components/header';
import VideoDetail from './components/video_detail';
import VideoItems from './components/video_items';


const App = (props) => {
  const [videoItems, setVideoItems] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  useEffect(() => {

    fetch('network/data.json')//
    .then(response => response.json())//
    .then(result => setVideoItems(result.items));
  },[]);

  const getKeyword = (text) => {
    // fetch('network/searchData.json')//
    // .then(response => response.json())//
    // .then(result => console.log(result.items));


    // fetch('network/searchData.json')//
    // .then(response => response.json())//
    // .then(result => [...result.items, result.items.map(item => item.id = item.id.videoId)])//
    // .then(items => console.log(items));

    fetch('network/searchData.json')//
    .then(response => response.json())//
    .then(result => result.items.map((item) => {
      return {...item, id: item.id.videoId}
    }))//
    .then(videoItems => setVideoItems(videoItems));

    
    // fetch('network/searchData.json')//
    // .then(response => response.json())//
    // .then(result => result.items)//
    // .then(items => console.log(items));

    console.log(text);
  };

  const selectVideo = (videoItem) => {
    setSelectedVideo(videoItem);
  };


  return (
    <div className={styles.app}>
      <Header getKeyword={getKeyword} />
      {selectedVideo ? 
      <section className='flex'>
      <VideoDetail className='w-3/5' selectedVideo={selectedVideo} />
      <VideoItems videoItems={videoItems} selectVideo={selectVideo} setSelectedVideo={setSelectedVideo} /> 
      </section>
      : <VideoItems videoItems={videoItems} selectVideo={selectVideo} />}
    </div>
  );
};

export default App;
