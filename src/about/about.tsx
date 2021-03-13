/**
 * Module for the about section.
 */



/**
 * Imports.
 */
import { FC }      from 'react';
import { Section } from 'section/section';
import BemHelper   from 'react-bem-helper';
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
	<Section background='white' className={ bemHelper() } position='intermediary'>
		{ 'TODO: Add about here' }
	</Section>
);
