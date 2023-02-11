import "./styles.css";
import { useState } from "react";

export default function App() {
  const [days, setDays] = useState(["30 days", "90 days"]);
  const [langauge, setLangauge] = useState(["javaScript", "html", "css"]);
  const [selectedlang, setSelectedlang] = useState("");
  const [selectedDuration, setSelectedDuretion] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    console.log(value);
    setSelectedlang(value);
  };
  const handleChangeDuration = (e) => {
    const value = e.target.value;
    console.log(value);
    setSelectedDuretion(value);
  };

  return (
    <div>
      <h3>Duration</h3>
      <div>
        {days.map((ele, i) => {
          return (
            <div key={i}>
              <label id={ele}>{ele}</label>
              <input
                type="radio"
                onChange={(e) => handleChangeDuration(e)}
                id={ele}
                name="days"
                value={ele}
              />
            </div>
          );
        })}
      </div>
      <div>
        <h3>
          Programming langauge <br />
          result: {selectedlang}
        </h3>
        <br />
        {langauge.map((ele, i) => {
          return (
            <div key={i}>
              <label id={ele}>{ele}</label>
              <input
                type="radio"
                onChange={(e) => handleChange(e)}
                id={ele}
                name="langauge"
                value={ele}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
