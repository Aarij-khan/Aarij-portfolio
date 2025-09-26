/* eslint-disable react/prop-types */
import "./ProjectBanner.css";

const ProjectBanner = ({data}) => {
    
    const {imgUrl, serialNo, heading, para, read, readLink, isReverse, video} = data;
    return (
    <div className={isReverse == true ? "banner_reverse" : "banner_wrapper"}>
      <div className="img_wrapper">
        {
          video ? (
              <video className="project-video" autoPlay loop muted width="100%">
              <source src={imgUrl} type="video/mp4" />
            </video>
          ) : (
            <div className="img_container">
              <img src={imgUrl} alt="" className="project-image"/>
            </div>
          )}
      </div>

      <div className="text_wrapper">
        <h2>{serialNo}</h2>
        <h3>{heading}</h3>
        <p>{para}</p>
        {
          readLink == false ? <span style={{opacity:0.5, cursor:"not-allowed"}}><img src={read} alt="" /></span> : null
        }
      </div>
    </div>
  )
}

export default ProjectBanner
