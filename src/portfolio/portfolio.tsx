/**
 * Module for the portfolio section.
 */



/**
 * Imports.
 */
import { FC }      from 'react';
import { Section } from 'section/section';
import BemHelper   from 'react-bem-helper';
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
	<Section background='gray' className={ bemHelper() } position='intermediary'>
		{ 'TODO: Add portfolio here' }
	</Section>
);
