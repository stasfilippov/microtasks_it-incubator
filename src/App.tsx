import React, {useState} from 'react';
import './App.css'
import {NewComponent} from './components/NewComponent';
import {Button} from './components/Button';

function App() {

	const [money, setMoney] = useState([
		{ banknots: 'Dollars', value: 100, number: ' a1234567890' },
		{ banknots: 'Dollars', value: 50, number: ' z1234567890' },
		{ banknots: 'Rubls', value: 100, number: ' w1234567890' },
		{ banknots: 'Dollars', value: 100, number: ' e1234567890' },
		{ banknots: 'Dollars', value: 50, number: ' c1234567890' },
		{ banknots: 'Rubls', value: 100, number: ' r1234567890' },
		{ banknots: 'Dollars', value: 50, number: ' x1234567890' },
		{ banknots: 'Rubls', value: 50, number: ' v1234567890' },
	])

	type FilterType = 'All' | 'Dollars' | 'Rubls';

	let currentMoney = money;

	let [filter, setFilter] = useState<FilterType>('All')

	const onClickFilterHandler = (nameButton: FilterType) => {
		setFilter(nameButton)
	}

	if (filter === 'Dollars') {
		currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'Dollars')
	}
	if (filter === 'Rubls') {
		currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'Rubls')
	}

	return (
		<>
			<NewComponent moneyState = {currentMoney}/>
			<div className={'buttonWrapper'}>
				<Button name={'All'} callBack={() => onClickFilterHandler('All')}/>
				<Button name={'Dollars'} callBack={() => onClickFilterHandler('Dollars')}/>
				<Button name={'Rubls'} callBack={() => onClickFilterHandler('Rubls')}/>
			</div>

		</>
	)
}

export default App;
