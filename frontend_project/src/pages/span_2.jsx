import { useState } from "react";
import { Link } from 'react-router-dom';
import styles from './span_2.module.css'
import logo from '/Asset 2.svg';
import lookup from '/search.svg'



export default function Span_2_func() {

    const fetchNotes = async () => {
        try {
          const response = await fetch('https://azrael-backend.onrender.com/span2');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setNotes(data);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchNotes();

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
    <div className={styles.top}>
        <span className={styles.header}>
            Spanish chapter 2 cheat sheet
        </span>
        <div className={styles.search_bar}>
            <input type="text" className={styles.search_input}/>
            <button className={styles.search_button}>
                <img src={lookup} className={styles.logo}/>
            </button>
        </div>
    </div>

    <div className={styles.main}>

    <div className={styles.left}>
          {/* <h2>Sites list:</h2>
          {accesible_links_arr.map((page) => (
            <a
              key={page.page_name}
              href={window.location.origin + page.page_path}
              onMouseEnter={() => setPage(page)}
            //   onMouseLeave={() => setCurrentDesc("")}
            >
              {page.page_name}
            </a>
          ))}    */}

          
        </div>
        <div className={styles.right}>
            {/* <div className={styles.watermark_wrapper}>
                
            </div>
            <div className={styles.description_wrapper}>
                {currentPage && <span className={styles.title_bar}>{currentPage.page_name}</span>}
                
                {currentPage && <span className={styles.description}>{currentPage.page_desc}</span>}
            </div> */}
        </div>

    </div>

    <div className={styles.footer}>
        <div className={styles.collumn}>
            <span>Source code & technologies used</span>
            <a href="https://github.com/DrAzrael/azrael_backend/tree/main">back end</a>
            <a href="https://github.com/AleksySzlapa/azrael_frontend/tree/main/frontend_project">front end</a>
            <a href="https://render.com">render</a>
            <a href="https://vitejs.dev">vite</a>
            <a href="https://react.dev">react</a>
            <a href="https://expressjs.com">express</a>
            <a href="https://nodejs.org/en">node</a>

        </div>
        <div className={styles.collumn}>
            <span>Documentation</span>
            <a href="">general overview</a>
            <a href="">backend overview</a>
            <a href="">frontend overview</a>
        </div>
        <div className={styles.collumn}>
            <span>Use guides</span>
            <a href="">back end scaling</a>
            <a href="">front end scaling</a>
            <a href="">backend end usage</a>
        </div>
    </div>
    </>
)
}