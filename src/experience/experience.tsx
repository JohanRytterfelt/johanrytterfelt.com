/**
 * Module for the experience section.
 */



/**
 * Imports.
 */
import { FC }    from 'react';
import BemHelper from 'react-bem-helper';
import './experience.pcss';



/**
 * Constants.
 */
const bemHelper: BemHelper<string> = new BemHelper(
	{
		name          : 'experience',
		outputIsString: true,
	}
);



/**
 * React component.
 */
export const Experience: FC = () =>
(
	<div className={ bemHelper() }>
		{ 'TODO: Add experience here' }
	</div>
);
