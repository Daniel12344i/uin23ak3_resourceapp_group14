import React, { useState } from "react";
import "./App.css"; // Anta at denne inneholder stiler for .tab-button osv.
import { resources } from "./Ressurserdata";

function App() {
  const [activeCategory, setActiveCategory] = useState(resources[0].category);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <div>
      {/* Statisk navigasjon */}
      <nav>
        <ul>
          <li className="tab-button">
            <button onClick={() => handleCategoryChange("HTML")}>HTML</button>
          </li>
          <li className="tab-button">
            <button onClick={() => handleCategoryChange("CSS")}>CSS</button>
          </li>
          <li className="tab-button">
            <button onClick={() => handleCategoryChange("JavaScript")}>
              JavaScript
            </button>
          </li>
          <li className="tab-button">
            <button onClick={() => handleCategoryChange("React")}>React</button>
          </li>
          <li className="tab-button">
            <button
              onClick={() => handleCategoryChange("Sanity and headless CMS")}
            >
              Sanity and headless CMS
            </button>
          </li>
        </ul>
      </nav>
      {/* Dynamisk innhold basert på valgt kategori */}
      <div id="content">
        {resources
          .filter((resource) => resource.category === activeCategory)
          .map((resource, index) => (
            <div key={index}>
              <h2>{resource.category}</h2>
              <p>{resource.text}</p>
              <ul>
                {resource.sources.map((source, sourceIndex) => (
                  <li key={sourceIndex}>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {source.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
