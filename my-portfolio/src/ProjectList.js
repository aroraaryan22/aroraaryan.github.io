
import GameImage1 from "/Users/aryanarora/Desktop/git port/aroraaryan.github.io/my-portfolio/src/gameImages/image1.png";
import GameImage2 from "/Users/aryanarora/Desktop/git port/aroraaryan.github.io/my-portfolio/src/gameImages/image2.png";
import GameImage3 from "/Users/aryanarora/Desktop/git port/aroraaryan.github.io/my-portfolio/src/gameImages/image3.png";

import equipay1 from "/Users/aryanarora/Desktop/git port/aroraaryan.github.io/my-portfolio/src/equipay/equipay1.png";
import eqeipay2 from "/Users/aryanarora/Desktop/git port/aroraaryan.github.io/my-portfolio/src/equipay/equipay2.png";
import equipay3 from "/Users/aryanarora/Desktop/git port/aroraaryan.github.io/my-portfolio/src/equipay/equipay3.png";

import chat1 from "/Users/aryanarora/Desktop/git port/aroraaryan.github.io/my-portfolio/src/chat-project/chat1.png";
import chat2 from "/Users/aryanarora/Desktop/git port/aroraaryan.github.io/my-portfolio/src/chat-project/chat2.png";
import chat3 from "/Users/aryanarora/Desktop/git port/aroraaryan.github.io/my-portfolio/src/chat-project/chat3.png";
import chat4 from "/Users/aryanarora/Desktop/git port/aroraaryan.github.io/my-portfolio/src/chat-project/chat4.png";
import chat5 from "/Users/aryanarora/Desktop/git port/aroraaryan.github.io/my-portfolio/src/chat-project/chat5.png";
import chat6 from "/Users/aryanarora/Desktop/git port/aroraaryan.github.io/my-portfolio/src/chat-project/chat6.png";

import port1 from "/Users/aryanarora/Desktop/git port/aroraaryan.github.io/my-portfolio/src/Portfolio/port2.png";
import port2 from "/Users/aryanarora/Desktop/git port/aroraaryan.github.io/my-portfolio/src/Portfolio/port2.png";
import port3 from "/Users/aryanarora/Desktop/git port/aroraaryan.github.io/my-portfolio/src/Portfolio/port3.png";

import img1 from "/Users/aryanarora/Desktop/git port/aroraaryan.github.io/my-portfolio/src/usask conect/img1.png";
import img2 from "/Users/aryanarora/Desktop/git port/aroraaryan.github.io/my-portfolio/src/usask conect/img2.png";
import img3 from "/Users/aryanarora/Desktop/git port/aroraaryan.github.io/my-portfolio/src/usask conect/img3.png";



import './projectlist.css';

export const ProjectList = [
  
  
  {
    name: "Full stack web app - Chat Application",
    images: [chat1, chat2, chat3, chat4, chat5, chat6],
    Technologies: " NodeJS, React, MySQL, Docker, HTML/CSS ",
    features : "login, register, different channels to chat on, reply to message, like/dislike message, search message, admin account",
  },
  {
    name: "FULL STACK WEB PROGRAMMING APPLICATION – EQUIPAY -EXPENSE TRACKER AND SPLITTER",
    images: [equipay1, eqeipay2, equipay3],
    Technologies: "technologies : Used NodeJS, React, SQLite, Docker, HTML/CSS ",
   features:  "Group project, login, register, to add expense, split expense, make groups, leave comments/notes, add friends, search expense, send notifications, receipt scanner, graphs for history of spending habits",
  },
  {
    name: "SPACE – WAR – UNITY GAME - 2D",
    images: [GameImage1, GameImage2, GameImage3],
    Technologies: " C#, Unity tools to create 2d game developed using C# and unity tools ",
     features: " 2d game with menus, shop upgrades, AI integrated enemies, rewards, and boss enemy. "
    ,
  },
  {
    name: "Usask Connect - Social Media App",
    images: [img1, img2, img3],
    Technologies: " Flask, python, MySQL, Git, HTML/CSS, Socket.io, SQlite",
    features: "Group project, chat, login, register, upload pictures, comment on pictures ",
  },
  {
    name: "Portfolio Website",
    images: [port1, port2, port3],
    Technologies: " React, HTML/CSS, JavaScript. ",
    features: " Personal portfolio website, with different projects, and contact detail and social media links with downloadable resume. "

    ,
  },
];

export default ProjectList;




