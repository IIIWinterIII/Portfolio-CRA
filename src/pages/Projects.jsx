import React from "react";
import "../styles/pages/Projects.css";
import dataBox from "../dataBoxProjectPages";

function Projects() {
  return (
    <main className="container-projects">
      <section className="text-section">
        <h1>Мои последние работы</h1>
        <h3>
          Вот несколько <span>проектов</span>, которые я создавал для{" "}
          <span>обучения</span> и <span>практики</span>.
        </h3>
      </section>
      <div className="box-with-projects">
        {dataBox.map(
          (
            { img, alt, title, title2, subtitle, subtitle2, repoUrl, demoUrl },
            index
          ) => (
            <div className="project" key={index}>
              <img
                src={`${process.env.PUBLIC_URL}/${img}`}
                alt={alt}
                className="image"
              />
              <div className="description">
                <p className="title">
                  <code>{title}</code>
                </p>
                <p>{subtitle}</p>
                <p className="title">{title2}</p>
                <p>{subtitle2}</p>
              </div>
              <div className="button-section">
                <a href={repoUrl}>GitHub</a>
                <a href={demoUrl}>Demo</a>
              </div>
            </div>
          )
        )}
      </div>
    </main>
  );
}

export default Projects;
