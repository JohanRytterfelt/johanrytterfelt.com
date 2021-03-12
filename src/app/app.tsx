/**
 * Main app component.
 */



/**
 * Imports.
 */
import BemHelper     from 'react-bem-helper';
import React, { FC } from 'react';
import './app.pcss';



/**
 * Constants.
 */
const bemHelper: BemHelper<string> = new BemHelper(
	{
		name          : 'app',
		outputIsString: true,
	}
);



/**
 * React component.
 */
export const App: FC = () =>
{
	return (
		<div className={ bemHelper() }>
			{ 'My name is App, nice to meet you!' }
		</div>
	);
};
