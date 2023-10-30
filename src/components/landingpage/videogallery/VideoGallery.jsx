// import { useState } from "react";
import "./videogallery.css";

import { useState } from "react";

function VideoGallery({ videos }) {
  const [selectedVideo, setSelectedVideo] = useState(0);

  return (
    <>
     

      {/* // <!-- Video G/allery --> */}
      <div className="bg-gd-color2 ">
        <section className=" py-5 Container">
          <div class="container">
            <div className="row">
              <div className=" section-intro text-center">
                <h2 className="g-title">Video Gallery</h2>
              </div>
            </div>
            <div className="video-con mt-5">
              <div className="main-video">
                {selectedVideo !== null && (
                  <div className="video">
                    <iframe
                      src={`${videos[selectedVideo].src}`}
                      controls
                      muted
                      autoplay
                      width="100%"
                      height={380}
                      onEnded={() => setSelectedVideo(null)}
                    />
                    <h4 className="title p-2">{videos[selectedVideo].title}</h4>
                  </div>
                )}
              </div>
              <div className="video-list">
                {videos.map((video, index) => (
                  <div 
                  className={`vid${
                    selectedVideo === index ? " active" : ""
                  }`}
                  key={index}  onClick={() => setSelectedVideo(index)}>
                    <video
                      src={video.src}
                      muted
                    ></video>
                    <h4 className="title">{video.title}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default VideoGallery;
