import logo from "./logo.svg";
import "./App.css";
import Row from "./Row";
import { useEffect, useState } from "react";

function App() {
  const [atlasData, setAtlasData] = useState([]);

  useEffect(() => {
    fetch("https://run.mocky.io/v3/da1ff640-dde1-4a17-b101-f614455491e7").then(
      (response) => {
        response.json().then((data) => {
          console.log(data);
          setAtlasData(data);
        });
      }
    );
  }, []);

  return (
    <div className="App">
      {/* <!--Table--> */}
      <div className="tablecontainer">
        <table class="atlastable" border="1" cellspacing="0">
          <thead>
            <tr class="tableheading">
              <th>REGION</th>
              <th>ENVIRONMENT</th>
              <th>MODULES</th>
              <th>VERSION</th>
            </tr>
          </thead>
          <tbody>
            {/* <!--First Row--> */}
            {atlasData.length > 0 && atlasData.map((d) => {
              return <Row region={d.region} environment={d.environment} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
