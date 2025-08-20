import {ml,web,da,iot,fd,html,tw,react,mongo,node,python,c,git,sql,pandas,numpy,figma,opencv,sirr1,rag1,conv1,redconnect1
} from '../assets/images'

const services = [
    {
      title: "Web Developement",
      icon: web,
    },
    {
      title: "Machine Learning",
      icon: ml,
    },
    {
      title: "Data Analysis",
      icon: da,
    },
    {
      title: "IoT",
      icon: iot,
    },
  ];

const project = [
  {
    id: 1,
    title: "Conversational file manager",
    description: " Built a  chatbot which will do basic file operations,summarization and mailing through voice or text command",
    image: conv1,
    liveLink: "#",
    codeLink: "https://github.com/Srijith1881/conversational-file-manager",
  },
  {
    id: 2,
    title: "PDF based RAG system",
    description: "created a robust, Production ready backend for a RAG system with PDF injection and cloud ready It is based on microservice architecture",
    image: rag1,
    liveLink: "#",
    codeLink: "https://github.com/Srijith1881/RAG-client",
  },
  {
    id: 3,
    title: "Smart Irrigation System(SIRR)",
    description: " making the existing irrigation system smarter by using various sensors and a machine learning model ",
    image: sirr1,
    liveLink: "#",
    codeLink: "https://github.com/Srijith1881/Smart-irrigation-system-integrated-with-machine-learning",
  },
  {
    id: 4,
    title: "Blood Management Portal (RedConnect)",
    description: "Developed using the MERN stack, It is a comprehensive portal designed to facilitate blood donation and requests",
    image: redconnect1,
    liveLink: "https://red-connect-fe.vercel.app/",
    codeLink: "https://github.com/Srijith1881/RedConnect-FE",
  },
]

const technologies =[
  {
    name:"html",
    icon:html
  },
  {
    name:"tailwind",
    icon:tw
  },
  {
    name:"react",
    icon:react
  },
  {
    name:"mongo",
    icon:mongo
  },
  {
    name:"node",
    icon:node
  },
  {
    name:"python",
    icon:python
  },
  {
    name:"c",
    icon:c
  },
  {
    name:"git",
    icon:git
  },
  {
    name:"sql",
    icon:sql
  },
  {
    name:"pandas",
    icon:pandas
  },
  {
    name:"numpy",
    icon:numpy
  },
  {
    name:"opencv",
    icon:opencv
  },
  {
    name:"figma",
    icon:figma
  },
]

export {services,project,technologies}