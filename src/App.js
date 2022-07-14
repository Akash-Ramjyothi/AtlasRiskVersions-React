import logo from "./logo.svg";
import "./App.css";
import Row from "./Row";
import { useEffect, useState } from "react";

function App() {
  const [atlasData, setAtlasData] = useState([]);

  useEffect(() => {
    fetch("https://run.mocky.io/v3/a028cd78-a3d1-420d-9cdc-420635506555").then((response) => {
      response.json().then((data) => {
        console.log(data);
        setAtlasData(data);
      });
    });
  }, []);

  return (
    <div className="App">
      {/* {<!--Top NavBar-->} */}
      <div class="topnav">
      </div>

      {/* {<!--Title-->} */}
      <label class="title"> Atlas Risk Versions </label>

      {/* {<!--Divider-->} */}
      <hr class="solid" />

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
            {atlasData.length > 0 &&
              atlasData.map((d, ind) => {
                return (
                  <Row
                    key={ind}
                    region={d.region}
                    environment={d.environment}
                    ind={ind}
                  />
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
