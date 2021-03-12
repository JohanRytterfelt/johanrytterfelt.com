/**
 * Module for the portfolio section.
 */



/**
 * Imports.
 */
import { FC }    from 'react';
import BemHelper from 'react-bem-helper';
import './portfolio.pcss';



/**
 * Constants.
 */
const bemHelper: BemHelper<string> = new BemHelper(
	{
		name          : 'portfolio',
		outputIsString: true,
	}
);



/**
 * React component.
 */
export const Portfolio: FC = () =>
(
	<div className={ bemHelper() }>
		{ 'TODO: Add portfolio here' }
	</div>
);
