import React from 'react';

type CarType = {
	id?: number
	manufacturer: string
	model: string
}

type NewComponentPropsType = {
	cars: CarType[]
}
export const NewComponent = (props: NewComponentPropsType) => {
	props.cars.map((el, index) => {
		return el.id = index + 1;
	})
	return (
		<table>
			<tr>
				<th>manufacturer</th>
				<th>model</th>
			</tr>
			{props.cars.map((car) => {
				return (
					<tr key={car.id}>
						<td>{car.manufacturer}</td>
						<td>{car.model}</td>
					</tr>
				)
			})}
		</table>
	);
};

