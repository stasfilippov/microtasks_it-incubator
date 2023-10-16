import React, {useState} from 'react';
import './App.css'
// import {Button} from './components/Button';

function App() {

	// const Button1Foo = (subscriber: string, age: number) => {
	// 	console.log(subscriber, age)
	// }
	//
	// const Button2Foo = (subscriber: string) => {
	// 	console.log(subscriber)
	// }
	//
	// const Button3Foo = () => {
	// 	console.log(' I am stupid button')
	// }

	let[a, setA] = useState(1);

	const onClickHandler = () => {
		setA(++a);
		console.log(a)
	}

	const resetCounter = () => {
		setA(a = 0)
		console.log(a)
	}


	return (
		<div className="App">
			{/*<Button name={'my youtube channel-1'} callBack={() => Button1Foo('I am Vasya', 21)}/>*/}
			{/*<Button name={'my youtube channel-2'} callBack={() =>Button2Foo('I am Ivan')}/>*/}
			{/*<Button name={'Stupid-button'} callBack={Button3Foo}/>*/}
			<h1>{a}</h1>
			<button onClick={onClickHandler}>number</button>
			<button onClick={resetCounter}>0</button>
		</div>
	)
}

export default App;
