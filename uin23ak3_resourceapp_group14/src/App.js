import React from "react";
import "./css/main.css";
import { resources } from "./Resource/Ressurserdata";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useParams,
  Navigate,
} from "react-router-dom"; // Import useParams, Link, and Routes here

// Definér en ny komponent for å håndtere visning basert på URL-parametere
function CategoryView() {
  let { category } = useParams();
  category = decodeURIComponent(category); // Dekoder URL-komponenten til en leslig streng

  return (
    <div id="content">
      {resources
        .filter((resource) => resource.category === category)
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
  );
}

function App() {
  // Oppdatert for å inkludere React Router
  return (
    <Router>
      <div id="container">
        {/* Oppdatert navigasjon til å bruke Link */}
        <nav>
          <ul>
            <li className="tab-button-html">
              <Link to="/HTML">HTML</Link>
            </li>
            <li className="tab-button-css">
              <Link to="/CSS">CSS</Link>
            </li>
            <li className="tab-button-javascript">
              <Link to="/JavaScript">JavaScript</Link>
            </li>
            <li className="tab-button-react">
              <Link to="/React">React</Link>
            </li>
            <li className="tab-button-sanity">
              <Link to="/Sanity%20and%20headless%20CMS">
                Sanity and headless CMS
              </Link>
            </li>
          </ul>
        </nav>

        {/* Rute for å håndtere dynamisk kategorivalg basert på URL */}
        <Routes>
          <Route path="/" element={<Navigate to="/HTML" replace />} />

          <Route path="/:category" element={<CategoryView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
