const Row = ({ region, environment }) => {
  return (
    <tr>
      <td class="region">{region}</td>
      <td class="environment">
        <div>STG</div>
        <div>UAT</div>
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
        <div>
          <div>{environment.STG.Server}</div>
          <div>{environment.STG.Coherence}</div>
          <div>{environment.STG.UI}</div>
        </div>
        <div>
          <div>{environment.UAT.Server}</div>
          <div>{environment.UAT.Coherence}</div>
          <div>{environment.UAT.UI}</div>
        </div>
      </td>
    </tr>
  );
};

export default Row;
