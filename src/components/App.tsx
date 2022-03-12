import Event from "../components/Event/Event";

const users = [
  {
    name: "Sumi",
    age: 20,
  },
  {
    name: "Marcus",
    age: 19,
  },
];
const App = (): JSX.Element => {
  return (
    <div>
      <Event />
    </div>
  );
};

export default App;
