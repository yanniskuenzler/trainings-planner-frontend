import React, {Component} from "react";
import TrainingCards from "./components/trainingCards";
import Creator from "./components/creator";

class App extends Component {
  render() {
    return (
        <div>
            <Creator />
            <TrainingCards />
        </div>
  );
  }

}

export default App;
