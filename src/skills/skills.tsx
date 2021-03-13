/**
 * Module for the skills section.
 */



/**
 * Imports.
 */
import { FC }      from 'react';
import { Section } from 'section/section';
import BemHelper   from 'react-bem-helper';
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
	<Section background='gray' className={ bemHelper() } position='intermediary'>
		{ 'TODO: Add skills here' }
	</Section>
);
