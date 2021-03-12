/**
 * Module for the skills section.
 */



/**
 * Imports.
 */
import { FC }    from 'react';
import BemHelper from 'react-bem-helper';
import './skills.pcss';



/**
 * Constants.
 */
const bemHelper: BemHelper<string> = new BemHelper(
	{
		name          : 'skills',
		outputIsString: true,
	}
);



/**
 * React component.
 */
export const Skills: FC = () =>
(
	<div className={ bemHelper() }>
		{ 'TODO: Add skills here' }
	</div>
);
