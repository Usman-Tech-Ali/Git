import ClcokHeading from "./components/ClockHeading";
import ClcokSlogan from "./components/ClockSlogan";
import CurrentTime from "./components/CurrentTime";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <center>
      <ClcokHeading></ClcokHeading>
      <ClcokSlogan></ClcokSlogan>
      <CurrentTime></CurrentTime>
    </center>
  );
}

export default App;
