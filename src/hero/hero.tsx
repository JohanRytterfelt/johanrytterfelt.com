/**
 * Module for the hero image.
 */



/**
 * Imports.
 */
import { FC }      from 'react';
import { Section } from 'section/section';
import BemHelper   from 'react-bem-helper';
import './hero.pcss';



/**
 * Constants.
 */
const bemHelper: BemHelper<string> = new BemHelper(
	{
		name          : 'hero',
		outputIsString: true,
	}
);



/**
 * React component.
 */
export const Hero: FC = () =>
(
	<Section className={ bemHelper() } position='first'>
		<h1 className={ bemHelper( 'heading' ) }>
			{ 'TODO: Add heading here' }
		</h1>
	</Section>
);
