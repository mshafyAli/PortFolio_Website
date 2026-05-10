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
            onClick={() => {
              toggleTab(1);
            }}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleStatee === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => {
              toggleTab(2);
            }}
          >
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
            {/*==================== QUALIFICATION 1 (BSCS - Left) ====================*/}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">BSCS</h3>
                <span className="qualification__subtitle">
                  Sindh Madressatul Islam (SMIU)
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2021 - 2025
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/*==================== QUALIFICATION 2 (Intermediate - Right) ====================*/}
            <div className="qualification__data">
              <div></div> {/* Empty div for left side spacing */}
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Intermediate</h3>
                <span className="qualification__subtitle">
                  PECHS Govt Education Science College
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2018 - 2020
                </div>
              </div>
            </div>

            {/*==================== QUALIFICATION 3 (Matriculation - Left) ====================*/}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Matriculation</h3>
                <span className="qualification__subtitle">
                  The New Earth School
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2016 - 2018
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                {/* Last item hai toh line end ho jayegi */}
                <span className="qualification__line-none"></span>
              </div>
            </div>
          </div>

          {/* ===============    Experience    ======================= */}

          <div
            className={
              toggleStatee === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {/*==================== QUALIFICATION 1 (Futurbyte) ====================*/}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Full Stack Developer</h3>
                <span className="qualification__subtitle">
                  Futurbyte (Karachi)
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> April 2025 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/*==================== QUALIFICATION 2 (Encoders) ====================*/}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">MERN Stack Developer</h3>
                <span className="qualification__subtitle">
                  Encoders (Karachi)
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> July 2024 - March
                  2025
                </div>
              </div>
            </div>

            {/*==================== QUALIFICATION 3 (Carrotar) ====================*/}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Frontend Developer</h3>
                <span className="qualification__subtitle">
                  Carrotar (Karachi)
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> March 2024 - June
                  2024
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                {/* Ab ye last item hai, toh yahan line nahi hogi */}
                <span className="qualification__line-none"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
