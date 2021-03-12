/**
 * Module for the footer section.
 */



/**
 * Imports.
 */
import { FC }    from 'react';
import BemHelper from 'react-bem-helper';
import './footer.pcss';



/**
 * Constants.
 */
const bemHelper: BemHelper<string> = new BemHelper(
	{
		name          : 'footer',
		outputIsString: true,
	}
);



/**
 * React component.
 */
export const Footer: FC = () =>
(
	<div className={ bemHelper() }>
		{ 'TODO: Add footer here' }
	</div>
);
