import { setSourceMapRange } from "typescript";

interface PropsTypes {
  setPage: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar = (props: PropsTypes): JSX.Element => {
  return (
    <nav>
      <button onClick={() => props?.setPage("planet")}>Planets</button>
      <button onClick={() => props?.setPage("people")}>People</button>
    </nav>
  );
};

export default Navbar;
