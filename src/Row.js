const Row = ({ region, environment }) => {
  return (
    <tr>
      <td class="region">{region}</td>
      <td class="environment">
        {environment.map((e, ind) => {
          return <div key={ind}>{e.name}</div>;
        })}
      </td>
      <td class="modules">
        <div id="accordion">
          <div>Server</div>
          <div class="content" id="myid">
            <table
              class="tableresult"
              id="tableId"
              border="2"
              cellspacing="0"
              cellpadding="6"
            >
              <tr>
                <th>TYPE</th>
                <th>PROCESSINSTANCE</th>
                <th>LATEST_RUN</th>
              </tr>
              <tr>
                <td>AggWebServer</td>
                <td>Convertibles</td>
                <td>2022-06-14 10:01:52:512</td>
              </tr>
            </table>
          </div>

          <div>Coherence</div>
          <div class="content" id="myid">
            <table
              class="tableresult"
              id="tableId"
              border="2"
              cellspacing="0"
              cellpadding="6"
            >
              <tr>
                <th>TYPE</th>
                <th>PROCESSINSTANCE</th>
                <th>LATEST_RUN</th>
              </tr>
              <tr>
                <td>AggWebServer</td>
                <td>Convertibles</td>
                <td>2022-06-14 10:01:52:512</td>
              </tr>
            </table>
          </div>

          <div>UI</div>
          <div class="content" id="myid">
            <table
              class="tableresult"
              id="tableId"
              border="2"
              cellspacing="0"
              cellpadding="6"
            >
              <tr>
                <th>TYPE</th>
                <th>PROCESSINSTANCE</th>
                <th>LATEST_RUN</th>
              </tr>
              <tr>
                <td>AggWebServer</td>
                <td>Convertibles</td>
                <td>2022-06-14 10:01:52:512</td>
              </tr>
            </table>
          </div>
        </div>

        <div id="accordion_2">
          <div>Server</div>
          <div class="content" id="myid">
            <table
              class="tableresult"
              id="tableId"
              border="2"
              cellspacing="0"
              cellpadding="6"
            >
              <tr>
                <th>TYPE</th>
                <th>PROCESSINSTANCE</th>
                <th>LATEST_RUN</th>
              </tr>
              <tr>
                <td>AggWebServer</td>
                <td>Convertibles</td>
                <td>2022-06-14 10:01:52:512</td>
              </tr>
            </table>
          </div>

          <div>Coherence</div>
          <div class="content" id="myid">
            <table
              class="tableresult"
              id="tableId"
              border="2"
              cellspacing="0"
              cellpadding="6"
            >
              <tr>
                <th>TYPE</th>
                <th>PROCESSINSTANCE</th>
                <th>LATEST_RUN</th>
              </tr>
              <tr>
                <td>AggWebServer</td>
                <td>Convertibles</td>
                <td>2022-06-14 10:01:52:512</td>
              </tr>
            </table>
          </div>

          <div>UI</div>
          <div class="content" id="myid">
            <table
              class="tableresult"
              id="tableId"
              border="2"
              cellspacing="0"
              cellpadding="6"
            >
              <tr>
                <th>TYPE</th>
                <th>PROCESSINSTANCE</th>
                <th>LATEST_RUN</th>
              </tr>
              <tr>
                <td>AggWebServer</td>
                <td>Convertibles</td>
                <td>2022-06-14 10:01:52:512</td>
              </tr>
            </table>
          </div>
        </div>
      </td>
      <td class="version">
        {environment.map((e, ind) => {
          return (
            <div key={ind}>
              <div>{e.data.Server}</div>
              <div>{e.data.Coherence}</div>
              <div>{e.data.UI}</div>
            </div>
          );
        })}
      </td>
    </tr>
  );
};

export default Row;
