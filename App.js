import "./styles.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather />
      <p>
        This project is made by Xiluva and is Opensourced on{" "}
        <a
          href="https://github.com/Shiluvax/waether-app"
          target="blank"
        >
          Github
        </a>
      </p>
    </div>
  );
}