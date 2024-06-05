import './App.css';
import {useState} from 'react';
import DarkMode from './DarkMode';
import { ReactComponent as History } from "./recent-repeat-icon.svg";

function App() {
	const [calc, setCalc] = useState("");
	const [result, setResult] = useState("");
	const [history, setHistory] = useState([]);
	const [showHistory, setShowHistory] = useState(false);
	const operators = ['/', '*', '+', '-', '.'];

	const updateCalc = value => {
		if(
			operators.includes(value) && calc === '' || 
			operators.includes(value) && operators.includes(calc.slice(-1))
		) {
			return;
		}
		setCalc(calc + value);

		if(!operators.includes(value)) {
			setResult(eval(calc + value).toString())
		}
	}

	
	const calculate = () => {
		setCalc(eval(calc).toString())
		updateHistory(calc, result);
	}
	

	const allClear = () => {
		setCalc("")
		setResult("")
	}

	const updateHistory = (input, result) => {
		const newHistoryItem = `${input} = ${result}`;
		setHistory([newHistoryItem, ...history.slice(0, 2)]);
	}

	const showHistoryPage = () => {
		setShowHistory(true);
	  };

  return (
    <div className="App">
      <div className="calculator">
		<DarkMode/>
        <div className="display">
			<div className="content-top">
			<button className="history-button" onClick={showHistoryPage}>
              <History width="20" height="20" style={{ marginRight: '8px' }} />
            </button>
				
				
			</div>
			<div className="content-bottom">

			{showHistory ? (
              <div className="history-section">
                <h2>History</h2>
                <ul>
                  {history.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : (
				<>
				<div className="input"> {calc || "0"} </div>
				<div className="output">
					<span className="=">=</span>
					<div>{result ? <span>{result}</span> : ''}</div>
				</div>
			    </>
			)} 
			</div>
        </div>
		{!showHistory && (
			<div className="keys">

				<div data-key="clear" className="key action">
					<span onClick={allClear}>AC</span>
				</div>

				<div data-key="plusMinus" className="key action">
					<span>+/-</span>
				</div>

				<div data-key="%" className="key action">
					<span onClick={() => updateCalc('%')}>%</span>
				</div>

				<div data-key="/" className="key operator">
					<span onClick={() => updateCalc('/')}>÷</span>
				</div>

				<div data-key="1" className="key">
					<span onClick={() => updateCalc('1')}>1</span>
				</div>

				<div data-key="2" className="key">
					<span onClick={() => updateCalc('2')}>2</span>
				</div>

				<div data-key="3" className="key">
					<span onClick={() => updateCalc('3')}>3</span>
				</div>

				<div data-key="*" className="key operator">
					<span onClick={() => updateCalc('*')}n>x</span>
				</div>

				<div data-key="4" className="key">
					<span onClick={() => updateCalc('4')}>4</span>
				</div>

				<div data-key="5" className="key">
					<span onClick={() => updateCalc('5')}>5</span>
				</div>

				<div data-key="6" className="key">
					<span onClick={() => updateCalc('6')}>6</span>
				</div>

				<div data-key="-" className="key operator">
					<span onClick={() => updateCalc('-')}>-</span>
				</div>

				<div data-key="7" className="key">
					<span onClick={() => updateCalc('7')}>7</span>
				</div>

				<div data-key="8" className="key">
					<span onClick={() => updateCalc('8')}>8</span>
				</div>

				<div data-key="9" className="key">
					<span onClick={() => updateCalc('9')}>9</span>
				</div>

				<div data-key="+" className="key operator">
					<span onClick={() => updateCalc('+')}>+</span>
				</div>

				<div data-key="." className="key action">
					<span onClick={() => updateCalc('.')}>.</span>
				</div>

				<div data-key="0" className="key">
					<span onClick={() => updateCalc('0')}>0</span>
				</div>

				<div data-key="00" className="key">
					<span onClick={() => updateCalc('00')}>00</span>
				</div>
				
				<div data-key="=" className="key operator">
					<span onClick={calculate}>=</span>
				</div>
			</div>
		)}
      </div>
   </div>
  );
}

export default App;
