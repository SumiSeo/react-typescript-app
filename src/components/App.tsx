import Event from "../components/Event/Event";
import UserSearch from "./Refs/Ref";

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
      <UserSearch />
    </div>
  );
};

export default App;
