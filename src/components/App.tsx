import { useState } from "react";
import { ReactQueryDevtools } from "react-query/devtools";
import Navbar from "./NavBar";
import People from "./People";
import Planets from "./Planets";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App = (): JSX.Element => {
  const [page, setPage] = useState<string>("planets");
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <h1>Star wars info</h1>
          <Navbar setPage={setPage} />
          <div className="content">{page === "planets" ? <Planets /> : <People />}</div>
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
};

export default App;
