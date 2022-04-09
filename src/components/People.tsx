import { useQuery } from "react-query";
import Planet from "./Planet";

const fetchPeople = async () => {
  const res = await fetch("http://swapi.dev/api/people/");
  return res.json();
};

interface Person {
  name: string;
  gender: string;
  birth_year: string;
}
const People = (): JSX.Element => {
  const { data, status } = useQuery("people", fetchPeople);
  console.log(data);

  return (
    <div>
      <h2>People</h2>
      {status === "loading" && <div>Loading Data....</div>}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <div>
          {data?.results.map((person: Person) => (
            <Planet
              key={person?.name}
              name={person?.name}
              population={person?.gender}
              terrain={person?.birth_year}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default People;
