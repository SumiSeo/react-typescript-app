import { useState } from "react";
import { useQuery } from "react-query";
import Planet from "./Planet";
interface Planet {
  name: string;
  population: string;
  terrain: string;
}

const Planets = (): JSX.Element => {
  const [page, setPage] = useState(1);
  const fetchPlanets = async (pageNum: number = 0) => {
    const res = await fetch(`http://swapi.dev/api/planets/?page=${page}`);
    return res.json();
  };
  const { status, data, error, isFetching, isPreviousData } = useQuery(
    ["projects", page],
    () => fetchPlanets(page),
    { keepPreviousData: true, staleTime: 5000 }
  );

  console.log(data);

  return (
    <div>
      <h2>Planet</h2>
      {status === "loading" && <div>Loading Data....</div>}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <div>
          {data?.results.map((planet: Planet) => (
            <Planet
              key={planet?.name}
              name={planet?.name}
              population={planet?.population}
              terrain={planet?.terrain}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Planets;
