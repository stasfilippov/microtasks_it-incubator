import React from 'react';

type moneyStateType = {
	banknots: string,
	value: number,
	number: string,
}

type NewComponentPropsType = {
	moneyState: moneyStateType[],
}

export const NewComponent = (props: NewComponentPropsType) => {

	return (
		<>
			<ul>
				{props.moneyState.map((el, index) => {
					return (
						<li key={index}>
							<span>{el.banknots}</span>
							<span>{el.value}</span>
							<span>{el.number}</span>
						</li>
					)
				})}
			</ul>
		</>
	);
};

