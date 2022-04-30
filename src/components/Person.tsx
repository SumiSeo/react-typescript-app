interface PersonProps {
  name: string;
  gender: string;
  birth_year: string;
}

const Person = (props: PersonProps) => {
  console.log("props", props);
  return (
    <div className="card">
      <h3>{props?.name}</h3>
      <p>Population - {props?.gender}</p>
      <p>Terrain - {props?.birth_year}</p>
    </div>
  );
};

export default Person;
