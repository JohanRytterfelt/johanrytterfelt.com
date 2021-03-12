/**
 * Module for the about section.
 */



/**
 * Imports.
 */
import { FC }    from 'react';
import BemHelper from 'react-bem-helper';
import './about.pcss';



/**
 * Constants.
 */
const bemHelper: BemHelper<string> = new BemHelper(
	{
		name          : 'about',
		outputIsString: true,
	}
);



/**
 * React component.
 */
export const About: FC = () =>
(
	<div className={ bemHelper() }>
		{ 'TODO: Add about here' }
	</div>
);
