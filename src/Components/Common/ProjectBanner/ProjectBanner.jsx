/* eslint-disable react/prop-types */
import "./ProjectBanner.css";
import { useRef, useState, useEffect } from "react";

const ProjectBanner = ({data}) => {
    
    const {imgUrl, serialNo, heading, para, read, readLink, isReverse, video} = data;

    const videoRef = useRef(null);
    const wrapperRef = useRef(null);
    const [isFullscreen, setIsFullscreen] = useState(false);

    useEffect(() => {
      function onFullScreenChange() {
        const fsElement = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
        setIsFullscreen(!!fsElement);
      }
      document.addEventListener("fullscreenchange", onFullScreenChange);
      document.addEventListener("webkitfullscreenchange", onFullScreenChange);
      document.addEventListener("mozfullscreenchange", onFullScreenChange);
      document.addEventListener("MSFullscreenChange", onFullScreenChange);
      return () => {
        document.removeEventListener("fullscreenchange", onFullScreenChange);
        document.removeEventListener("webkitfullscreenchange", onFullScreenChange);
        document.removeEventListener("mozfullscreenchange", onFullScreenChange);
        document.removeEventListener("MSFullscreenChange", onFullScreenChange);
      };
    }, []);

    const toggleFullscreen = async () => {
      const el = videoRef.current; // target only the video element for fullscreen
      if (!el) return;

      try {
        if (!isFullscreen) {
          if (el.requestFullscreen) await el.requestFullscreen();
          else if (el.webkitRequestFullscreen) await el.webkitRequestFullscreen();
          else if (el.mozRequestFullScreen) await el.mozRequestFullScreen();
          else if (el.msRequestFullscreen) await el.msRequestFullscreen();
        } else {
          if (document.exitFullscreen) await document.exitFullscreen();
          else if (document.webkitExitFullscreen) await document.webkitExitFullscreen();
          else if (document.mozCancelFullScreen) await document.mozCancelFullScreen();
          else if (document.msExitFullscreen) await document.msExitFullscreen();
        }
      } catch (e) {
        // ignore errors
      }
    };

    return (
    <div ref={wrapperRef} className={isReverse == true ? "banner_reverse" : "banner_wrapper"}>
      <div className="img_wrapper">
        {
          video ? (
            <div className="video_holder">
              <video ref={videoRef} className="project-video" autoPlay loop muted playsInline>
                <source src={imgUrl} type="video/mp4" />
              </video>
              <button
                className={`fs_button ${isFullscreen ? 'fs_active' : ''}`}
                onClick={toggleFullscreen}
                aria-pressed={isFullscreen}
                aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
              >
                {isFullscreen ? '✕' : '⤢'}
              </button>
            </div>
          ) : (
            <div className="img_container">
              <img src={imgUrl} alt="" className="project-image"/>
            </div>
          )}
      </div>

      <div className="text_wrapper">
        <h2>{serialNo}</h2>
        <h3>{heading}</h3>
        <p className="text_wrapper_para">{para}</p>
        
        {
          readLink == false ? <span style={{opacity:0.5, cursor:"not-allowed"}}><img src={read} alt="" /></span> : <a href={readLink}><img src={read} alt="" /></a>
        }
      </div>
    </div>
  )
}

export default ProjectBanner
