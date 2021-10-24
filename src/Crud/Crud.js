import Read from "./Read";
import { Route } from "react-router-dom";

function Crud () {
  return (
    <>
      <Route path="/" exact><Read /></Route>
    </>
  );
}

export default Crud;