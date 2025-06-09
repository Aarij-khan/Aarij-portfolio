import Heading from "../../Components/Common/Heading/Heading";
import ProjectBanner from "../../Components/Common/ProjectBanner/ProjectBanner";
import "./Project.css";
import "./responsive.css";
import ProjectBannerData from "./ProjectBannerData";


const Project = () => {
  return (
    <section id="project" className="project">
      <div >
        <div className="project-wrapper">
          <div className="project-heading">
            <Heading text="My" Span="Project" light/>

            {ProjectBannerData.map((item, index)=>{
              return(
                <ProjectBanner key={index} data={item}/>
              )
            })}

          </div>
        </div>
      </div>
    </section>
  )
}

export default Project
