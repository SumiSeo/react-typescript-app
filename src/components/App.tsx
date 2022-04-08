import { useState } from "react";
import Navbar from "./NavBar";
import People from "./People";
import Planet from "./Planet";

const App = (): JSX.Element => {
  const [page, setPage] = useState<string>("planet");
  return (
    <div className="App">
      <h1>Star wars info</h1>
      <Navbar setPage={setPage} />
      <div className="content">{page === "planet" ? <Planet /> : <People />}</div>
    </div>
  );
};

export default App;
