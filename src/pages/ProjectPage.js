import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import img from "./../img/projects/02.png";


const ProjectPage = () => {
    return ( 
        <main className="section">
        <div className="container">
            <div className="project-details">

                <h1 className="title-1">ReactJS. Хуки</h1>

                <img src={img} alt="" className="project-details__cover" />

                <div className="project-details__desc">
                    <p>Skills: React, Node.js</p>
                </div>

<BtnGitHub link="http://github.com" />

            </div>
        </div>
    </main>
     );
}
 
export default ProjectPage;