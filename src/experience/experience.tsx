/**
 * Module for the experience section.
 */



/**
 * Imports.
 */
import { FC }      from 'react';
import { Section } from 'section/section';
import BemHelper   from 'react-bem-helper';
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
	<Section background='white' className={ bemHelper() } position='intermediary'>
		{ 'TODO: Add experience here' }
	</Section>
);
