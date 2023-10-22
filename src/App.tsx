import React, {useState} from 'react';
import './App.css'
import { Input } from './components/Input';
import { ButtonInput } from './components/ButtonInput';
// import {NewComponent} from './components/NewComponent';
// import {Button} from './components/Button';

function App() {
//! HomeWork 01_01
	// const [money, setMoney] = useState([
	// 	{ banknots: 'Dollars', value: 100, number: ' a1234567890' },
	// 	{ banknots: 'Dollars', value: 50, number: ' z1234567890' },
	// 	{ banknots: 'Rubls', value: 100, number: ' w1234567890' },
	// 	{ banknots: 'Dollars', value: 100, number: ' e1234567890' },
	// 	{ banknots: 'Dollars', value: 50, number: ' c1234567890' },
	// 	{ banknots: 'Rubls', value: 100, number: ' r1234567890' },
	// 	{ banknots: 'Dollars', value: 50, number: ' x1234567890' },
	// 	{ banknots: 'Rubls', value: 50, number: ' v1234567890' },
	// ])

	// type FilterType = 'All' | 'Dollars' | 'Rubls';

	// let currentMoney = money;

	// let [filter, setFilter] = useState<FilterType>('All')

	// const onClickFilterHandler = (nameButton: FilterType) => {
	// 	setFilter(nameButton)
	// }

	// if (filter === 'Dollars') {
	// 	currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'Dollars')
	// }
	// if (filter === 'Rubls') {
	// 	currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'Rubls')
	// }

	// return (
	// 	<>
	// 		<NewComponent moneyState = {currentMoney}/>
	// 		<div className={'buttonWrapper'}>
	// 			<Button name={'All'} callBack={() => onClickFilterHandler('All')}/>
	// 			<Button name={'Dollars'} callBack={() => onClickFilterHandler('Dollars')}/>
	// 			<Button name={'Rubls'} callBack={() => onClickFilterHandler('Rubls')}/>
	// 		</div>

	// 	</>
	// )


//! HomeWork 01_02
	let [message, setMessage] = useState([
		{message: 'message1'},
		{message: 'message2'},
		{message: 'message3'},
	])

	// const addNewMessage = (title: string) => {
	// 	let newMessage = {message: title}
	// 	setMessage([newMessage, ...message])
	// }

	let [title, setTitle] = useState('')


	const addNewMessage = (title: string) => {
		let newMessage = {message: title}
		setMessage([newMessage, ...message])
	}

	const callBackButtonHandler = () => {
		addNewMessage (title)
		setTitle('')
	}

	return (
		<div className='App'>
			{/* <FullInput addNewMessage={addNewMessage}/> */}

			<Input title={title} setTitle={setTitle}/>
			<ButtonInput newTitle={title} name='+' callBack={callBackButtonHandler}/>

			{message.map((el, index) => {
				return (
					<div key={index}>{el.message}</div>
				)
			})}
		</div>
	)
}

export default App;
