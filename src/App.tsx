import "./styles.css";
import InputArea from "./components/InputArea";
import {RecoilRoot} from "recoil";


function App() {
    return (
        <RecoilRoot>
            <div className="App">
                <h1>Outlook Search Query Builder</h1>
                <small>by: Jason Rowe</small>
                <p>
                    Place a list (separated by new lines) of terms to be searched. Any blank
                    lines, spaces or duplicates will be removed.
                </p>

                <InputArea/>
            </div>
        </RecoilRoot>
    );
}

export default App;