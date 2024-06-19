import "./components/EV.css";
import { State } from "./components/hooks/State";

export const App = () => {
  return (
    <section className="container">
      <State />
      <Sibling />
    </section>
  );
};

export function Sibling() {
  console.log("Sibling Component rendered");
  return (
    <div className="main-div">
      <h2> Sibling Component </h2>
    </div>
  );
}
