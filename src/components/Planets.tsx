import { useQuery } from "react-query";
import Planet from "./Planet";

const fetchPlanets = async () => {
  const res = await fetch("http://swapi.dev/api/planets/");
  return res.json();
};

interface Planet {
  name: string;
  population: string;
  terrain: string;
}
const Planets = (): JSX.Element => {
  const { data, status } = useQuery("planets", fetchPlanets, {
    staleTime: 0,
    onSuccess: () => console.log("data is fetched"),
  });
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
