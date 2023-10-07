import { useTranslation } from "react-i18next";
//imagenes de Rukas
import project1img0 from "../assets/images/project1/0.jpg";
import project1img1 from "../assets/images/project1/1.jpg";
import project1img2 from "../assets/images/project1/2.jpg";
import project1img3 from "../assets/images/project1/3.jpg";
import project1img4 from "../assets/images/project1/4.jpg";
import project1img5 from "../assets/images/project1/5.jpg";
import project1img6 from "../assets/images/project1/6.jpg";
import project1img7 from "../assets/images/project1/7.jpg";
import project1img8 from "../assets/images/project1/8.jpg";
import project1img9 from "../assets/images/project1/9.jpg";
//imagenes de realgimm
import project2img0 from "../assets/images/project2/0.jpg";
import project2img1 from "../assets/images/project2/1.jpg";
import project2img2 from "../assets/images/project2/2.jpg";
import project2img3 from "../assets/images/project2/3.jpg";
import project2img4 from "../assets/images/project2/4.jpg";
import project2img5 from "../assets/images/project2/5.jpg";
import project2img6 from "../assets/images/project2/6.jpg";
import project2img7 from "../assets/images/project2/7.jpg";
import project2img8 from "../assets/images/project2/8.jpg";
import project2img9 from "../assets/images/project2/9.jpg";

//imagenes de Finson
import project3img0 from "../assets/images/project3/0.png";
import project3img1 from "../assets/images/project3/1.png";
import project3img2 from "../assets/images/project3/2.png";
import project3img3 from "../assets/images/project3/3.png";

//imagenes de sigetApp
import project4img0 from "../assets/images/project4/0.jpg";
import project4img1 from "../assets/images/project4/1.jpg";
import project4img2 from "../assets/images/project4/2.jpg";
import project4img3 from "../assets/images/project4/3.jpg";
import project4img4 from "../assets/images/project4/4.jpg";
import project4img5 from "../assets/images/project4/5.jpg";
import project4img6 from "../assets/images/project4/6.jpg";
import project4img7 from "../assets/images/project4/7.jpg";
import project4img8 from "../assets/images/project4/8.jpg";
import project4img9 from "../assets/images/project4/9.jpg";


const useProjects = () => {
    const {t} = useTranslation("projects")
    const projects = [
        {   id: 1, 
            type: [`flutter`], 
            data:{
                title:`appMobile`,
                images: [project1img0,project1img1, project1img2, project1img3, project1img4, project1img5, project1img6, project1img7, project1img8, project1img9],
                info: `project1.info`,
                client: `project1.client`,
                tecnologies: `project1.tecnologies`,
                industry:`project1.industry`,
                date:`project1.date`
            }
        },
        {   id: 2, 
            type: [`react` ],
            data:{
                title:`appWeb`,
                images: [project2img0,project2img1, project2img2, project2img3, project2img4, project2img5, project2img6, project2img7, project2img8, project2img9],
                info: `project2.info`,
                client: `project2.client`,
                tecnologies: `project2.tecnologies`,
                industry:`project2.industry`,
                date:`project2.date`
            }
        },
        {   id: 3, 
            type: [`react`,],
            data:{
                title:`appWeb`,
                images: [project3img0,project3img1, project3img2, project3img3],
                info: `project3.info`,
                client: `project3.client`,
                tecnologies: `project3.tecnologies`,
                industry:`project3.industry`,
                date:`project3.date`,
                URL:`project3.URL`,
                URLName:`project3.URLName`, 
            }
        },
        {   id: 4, 
            type: [`react-native` ],
            data:{
                title:`appMobile`,
                images: [project4img0,project4img1, project4img2, project4img3, project4img4, project4img5, project4img6, project4img7, project4img8, project4img9],
                info: `project4.info`,
                client: `project4.client`,
                tecnologies: `project4.tecnologies`,
                industry:`project4.industry`,
                date:`project4.date`
            }
        },
      
    ];
    return {
        projects
    }
}

export default useProjects;