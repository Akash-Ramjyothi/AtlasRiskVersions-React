const Row = ({ region, environment, ind }) => {
  const serverTableData0 = environment[0].data.Server.tableData;
  const coherenceTableData0 = environment[0].data.Coherence.tableData;
  const uiTableData0 = environment[0].data.UI.tableData;

  const serverTableData1 = environment[1].data.Server.tableData;
  const coherenceTableData1 = environment[1].data.Coherence.tableData;
  const uiTableData1 = environment[1].data.UI.tableData;

  console.log({serverTableData0, serverTableData1})

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
              {serverTableData0.map((std, ind) => {
                return (
                  <tr key={ind}>
                    <td>{std.type}</td>
                    <td>{std.processInstance}</td>
                    <td>{std.latestrun}</td>
                  </tr>
                );
              })}
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
              {coherenceTableData0.map((ctd, ind) => {
                return (
                  <tr key={ind}>
                    <td>{ctd.type}</td>
                    <td>{ctd.processInstance}</td>
                    <td>{ctd.latestrun}</td>
                  </tr>
                );
              })}
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
              {uiTableData0.map((utd, ind) => {
                return (
                  <tr key={ind}>
                    <td>{utd.type}</td>
                    <td>{utd.processInstance}</td>
                    <td>{utd.latestrun}</td>
                  </tr>
                );
              })}
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
              {serverTableData1.map((std, ind) => {
                return (
                  <tr key={ind}>
                    <td>{std.type}</td>
                    <td>{std.processInstance}</td>
                    <td>{std.latestrun}</td>
                  </tr>
                );
              })}
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
              {coherenceTableData1.map((ctd, ind) => {
                return (
                  <tr key={ind}>
                    <td>{ctd.type}</td>
                    <td>{ctd.processInstance}</td>
                    <td>{ctd.latestrun}</td>
                  </tr>
                );
              })}
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
              {uiTableData1.map((utd, ind) => {
                return (
                  <tr key={ind}>
                    <td>{utd.type}</td>
                    <td>{utd.processInstance}</td>
                    <td>{utd.latestrun}</td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      </td>
      <td class="version">
        {environment.map((e, ind) => {
          return (
            <div key={ind}>
              <div>{e.data.Server.version}</div>
              <div>{e.data.Coherence.version}</div>
              <div>{e.data.UI.version}</div>
            </div>
          );
        })}
      </td>
    </tr>
  );
};

export default Row;
