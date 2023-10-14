import React from 'react';

type HeaderPropsType = {
	title: string
}
export const Header = (props: HeaderPropsType) => {
	return (
		<>
			<h1>{props.title}</h1>
		</>
	)
}