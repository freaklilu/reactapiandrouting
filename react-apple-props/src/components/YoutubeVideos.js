import React,{useState,useEffect} from 'react'
import "./YoutubeVideos.css"

function YoutubeVideos() {

    //youtube channel id request//
// "https://www.googleapis.com/youtube/v3/channels?key={}&forUsername=Apple&part=id"
      
const [youTubeVideos,setVideos]=useState([]);
useEffect(()=>{
    fetch(
        `https://www.googleapis.com/youtube/v3/search?key= AIzaSyAiSZnJhdo_BRDxqoiIx2_Td17AlLtLDn0&channelId=UCE_M8A5yxnLfW0KghEeajjw
        &part=snippet,id&order=date&maxResults=8`
        )

    .then((response) => response.json())
    .then((data) => {
        const youTubeVideosData = data.items;
        setVideos(()=>youTubeVideosData);
      
      });
},[])

// console.log(youTubeVideos);

return (
    <section className="youtubeVideosWrapper">
    <div className="allVideosWrapper">
      <div className="container">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-12">
            <h1 className="title-wraper bold video-title-wrapper">
              Latest Videos
            </h1>
          </div>
          
          {youTubeVideos?.map((singleVideo, i) => {
            let vidId = singleVideo.id.videoId;
            let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
            let videoWrapper = (
              <div key={i} className="col-sm-12 col-md-6">
                <div className="singleVideoWrapper">
                  <div className="videoThumbnail">
                    <a href={vidLink} target="_blank">
                      <img src={singleVideo.snippet.thumbnails.high.url} />
                    </a>
                  </div>
                  <div className="videoInfoWrapper">
                    <div className="videoTitle">
                      <a href={vidLink} target="_blank">
                        {singleVideo.snippet.title}
                      </a>
                    </div>
                    <div className="videoDesc">
                      {singleVideo.snippet.description}
                    </div>
                  </div>
                </div>
              </div>
            );
            return videoWrapper;
          })}
        </div>
      </div>
    </div>
    </section>
  );
}

export default YoutubeVideos



    // AIzaSyAiSZnJhdo_BRDxqoiIx2_Td17AlLtLDn0
   