interface PlanetProps {
  name: string;
  population: string;
  terrain: string;
}

const Planet = (props: PlanetProps) => {
  console.log("props", props);
  return (
    <div className="card">
      <h3>{props?.name}</h3>
      <p>Population - {props?.population}</p>
      <p>Terrain - {props?.terrain}</p>
    </div>
  );
};

export default Planet;
