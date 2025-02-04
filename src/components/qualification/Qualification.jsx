import React, { useState } from "react";
import "./qualification.css";
const Qualification = () => {

    const [toggleStatee, setTogglestate] = useState(1);

  const toggleTab = (index) => {
    setTogglestate(index);
  };

  return (
    <section className="section qualification" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
       
        <div className="qualification__tabs">
          <div 
           className={
            toggleStatee === 1
              ? "qualification__button qualification__active button--flex"
              : "qualification__button button--flex"
          }

          onClick={()=>{toggleTab(1)}}>
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div  className={
            toggleStatee === 2
              ? "qualification__button qualification__active button--flex"
              : "qualification__button button--flex"
          }

          onClick={()=>{toggleTab(2)}} >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">

{/* ===============    Education    ======================= */}

            <div
             className={
                toggleStatee === 1
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
             
              <div className="qualification__data">
                
                <div style={{border:"var(--border)"}}>
                <h3 className="qualification__title">BSCS</h3>
                <span className="qualification__subtitle">Sindh Madressatul Islam(SMIU)</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2021 - 2025
                </div>
                </div>

                <div style={{border:"var(--border)"}}>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
                
              </div>
              
              <div className="qualification__data">
                
                <div style={{border:"var(--border)"}}></div>

              <div style={{border:"var(--border)"}}>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

                <div style={{border:"var(--border)"}}>
                <h3 className="qualification__title">Web and App Dev</h3>
                <span className="qualification__subtitle">SMIT</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022 - 2023
                </div>
                </div>

              </div>

              <div className="qualification__data">
                
                <div style={{border:"var(--border)"}}>
                <h3 className="qualification__title">Intermediate</h3>
                <span className="qualification__subtitle">PECHS govt Education Science college</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2018 - 2020
                </div>
                </div>

                <div style={{border:"var(--border)"}}>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              </div>

              <div className="qualification__data">
                 
                 <div style={{border:"var(--border)"}}></div>

                 <div style={{border:"var(--border)"}}>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

                <div style={{border:"var(--border)"}}>
                <h3 className="qualification__title">Matriculation</h3>
                <span className="qualification__subtitle">The New Earth School</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2016 - 2018
                </div>
                </div>

                
                
              </div>
              
            </div>

{/* ===============    Experience    ======================= */}

            <div  
            className={
                toggleStatee === 2
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }>
             
             <div className="qualification__data">

              
               
               <div style={{border:"var(--border)"}}>
               <h3 className="qualification__title">Mern Stack Developer</h3>
               <span className="qualification__subtitle">Encoders (karachi)</span>
               <div className="qualification__calendar">
                 <i className="uil uil-calendar-alt"></i>July 2024 to Present
               </div>
               </div>

               <div style={{border:"var(--border)"}}>
               <span className="qualification__rounder"></span>
               <span className="qualification__line"></span>
             </div>
               
             </div>
             
             
             <div className="qualification__data">
               
               <div style={{border:"var(--border)"}}></div>

               <div style={{border:"var(--border)"}}>
               <span className="qualification__rounder"></span>
               <span className="qualification__line"></span>
             </div>
 
               <div style={{border:"var(--border)"}}>
               <h3 className="qualification__title">Frontend Developer</h3>
               <span className="qualification__subtitle">Carrotar (Karachi) </span>
               <div className="qualification__calendar">
                 <i className="uil uil-calendar-alt"></i> March 2024 to June 2024
               </div>
               </div> 

              

             </div>

             <div className="qualification__data">

              
               
               <div style={{border:"var(--border)"}}>
               <h3 className="qualification__title">Mern Stack Developer</h3>
               <span className="qualification__subtitle">Intern at CodeSoft(Remote)</span>
               <div className="qualification__calendar">
                 <i className="uil uil-calendar-alt"></i>Dec-23 to feb-2024
               </div>
               </div>

               <div style={{border:"var(--border)"}}>
               <span className="qualification__rounder"></span>
               <span className="qualification__line"></span>
             </div>
               
             </div>

          
             

           </div>

          </div>
      </div>
    </section>
  );
};

export default Qualification;
