import React from "react";
import stringGenerator from "./utils/StringGenerator";
import { useObservable } from "./hooks/useObservable";
import { interval } from "rxjs";
import { map, take } from "rxjs/operators";
import "antd/dist/antd.css";
import { Row, Col, Divider, Card } from "antd";

const names$ = interval(1000).pipe(
  map((i) => {
    return stringGenerator();
  }),
  take(30)
);

const App = () => {
  const names = useObservable(names$, []);
  console.log(names);

  return (
    <div className="App">
      <h1 style={{ padding: 10, textAlign: "center" }}>String Generator</h1>
      <Divider />
      <h2 style={{ padding: 10, textAlign: "center" }}>Result:</h2>
      <Card style={{ padding: 10 }}>
        {names.map((el, index) => {
          if (!el.isVisible) {
            return null;
          }
          return (
            <Card.Grid style={{ color: el.color }} key={index} span={5}>
              {el.char}
            </Card.Grid>
          );
        })}
      </Card>
    </div>
  );
};

export default App;
