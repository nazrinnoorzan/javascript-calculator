import { useState } from "react"
import "./App.css"

function App() {
  const [result, setResult] = useState("")

  // add calculation
  function handleResult(e) {
    setResult(result.concat(e.target.value))
  }

  // do calculation
  function handleCalculate() {
    try {
      setResult(eval(result).toString())
    } catch (err) {
      setResult("Error in calculation!")
    }
  }

  return (
    <div id="app">
      <div className="calculator">
        <div className="outputScreen" id="display">
          {result}
        </div>
        <div>
          <button className="jumbo" style={{ background: "rgb(172, 57, 57)" }} onClick={() => setResult("")}>
            AC
          </button>
          <button value="/" style={{ background: "rgb(102, 102, 102)" }} onClick={handleResult}>
            &divide;
          </button>
          <button value="*" style={{ background: "rgb(102, 102, 102)" }} onClick={handleResult}>
            x
          </button>
          <button value="7" onClick={handleResult}>
            7
          </button>
          <button value="8" onClick={handleResult}>
            8
          </button>
          <button value="9" onClick={handleResult}>
            9
          </button>
          <button value="‑" style={{ background: "rgb(102, 102, 102)" }} onClick={handleResult}>
            ‑
          </button>
          <button value="4" onClick={handleResult}>
            4
          </button>
          <button value="5" onClick={handleResult}>
            5
          </button>
          <button value="6" onClick={handleResult}>
            6
          </button>
          <button value="+" style={{ background: "rgb(102, 102, 102)" }} onClick={handleResult}>
            +
          </button>
          <button value="1" onClick={handleResult}>
            1
          </button>
          <button value="2" onClick={handleResult}>
            2
          </button>
          <button value="3" onClick={handleResult}>
            3
          </button>
          <button className="jumbo" value="0" onClick={handleResult}>
            0
          </button>
          <button id="decimal" value="." onClick={handleResult}>
            .
          </button>
          <button id="equals" style={{ background: "rgb(0, 68, 102)", position: "absolute", height: 130, bottom: 5 }} onClick={handleCalculate}>
            =
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
