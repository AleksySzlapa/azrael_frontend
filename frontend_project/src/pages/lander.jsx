import { useState } from "react";
import { Link } from 'react-router-dom';
import './lander.css'
import logo from '/Asset 2.svg';
import logo_big from '/Asset 3.svg'


export default function Lander_func() {
    const [currentPage, setPage] = useState("");
    const accesible_links_arr = [
        {
            page_name: "Example page",
            page_path: "/example_page",
            page_desc: "This is an example page created as a refrence for me in case i forget (wich i will) how they were suposed to be structured."
        },
        {
            page_name: "Lorem ipsum",
            page_path: "/example_page",
            page_desc: "This is refrence page2"
        },
        {
            page_name: "dolor sit amet",
            page_path: "/example_page",
            page_desc: "This is refrence page3"
        },
        {
            page_name: "consencotour lorem",
            page_path: "/example_page",
            page_desc: "This is refrence page4"
        },
    ]
return (
    <>
        <div className="header">
            <div className="logoWrapper">
                <img src={logo} className="logo" alt="Vite logo" />
            </div>
            <h1>Dr. Azrael Center</h1>
        </div>
    <main>
        <div className="linksWrapper">
          <h2>Sites list:</h2>
          {accesible_links_arr.map((page) => (
            <a
              key={page.page_name}
              href={window.location.origin + page.page_path}
              onMouseEnter={() => setPage(page)}
            //   onMouseLeave={() => setCurrentDesc("")}
            >
              {page.page_name}
            </a>
          ))}   
        </div>
        <div className="sidebar">
            <div className="watermark_wrapper">
                
            </div>
            <div className="description_wrapper">
                {currentPage && <span className="title_bar">{currentPage.page_name}</span>}
                
                {currentPage && <span className="description">{currentPage.page_desc}</span>}
            </div>
        </div>
    </main>
    <footer>
        <div className="collumn">
            <img src={logo_big} className="logo" alt="Vite logo" />
        </div>
        <div className="collumn">
            <span>Dr Azrael Center</span>
            <span>Dr Azrael Center is a web app designed and developed by Aleksy Szłapa for managing and browsing virtual cheet sheets owned by Aleks.</span>
        </div>
        <div className="collumn">
            <span>Source code & technologies used</span>
            <a href="https://github.com/DrAzrael/azrael_backend/tree/main">back end</a>
            <a href="https://github.com/AleksySzlapa/azrael_frontend/tree/main/frontend_project">front end</a>
            <a href="https://render.com">render</a>
            <a href="https://vitejs.dev">vite</a>
            <a href="https://react.dev">react</a>
            <a href="https://expressjs.com">express</a>
            <a href="https://nodejs.org/en">node</a>

        </div>
        <div className="collumn">
            <span>Documentation</span>
            <a href="">general overview</a>
            <a href="">backend overview</a>
            <a href="">frontend overview</a>
        </div>
        <div className="collumn">
            <span>Use guides</span>
            <a href="">back end scaling</a>
            <a href="">front end scaling</a>
            <a href="">backend end usage</a>
        </div>
    </footer>
    </>
)
}