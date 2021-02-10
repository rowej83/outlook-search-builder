import "./styles.css";
import InputArea from "./components/InputArea";

import { RecoilRoot } from "recoil";

export default function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <h1>Outlook Search Query Builder</h1>
        <small>written by: Jason Rowe</small>
        <p>
          Place a list (seperated by new lines) of terms to be search. Any blank
          lines, spaces or duplicates will be removed.
        </p>

        <InputArea />
      </div>
    </RecoilRoot>
  );
}