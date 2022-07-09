import logo from "./logo.svg";
import "./App.css";
import Row from "./Row";
import { useEffect, useState } from "react";

function App() {
  const [atlasData, setAtlasData] = useState([]);

  useEffect(() => {
    fetch("https://run.mocky.io/v3/f6bc5931-fd7e-431a-bc03-b41ec7058b0f").then(
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
            {atlasData.length > 0 && atlasData.map((d, ind) => {
              return <Row key={ind} region={d.region} environment={d.environment} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
