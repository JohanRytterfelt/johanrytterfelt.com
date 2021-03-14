/**
 * Module for the footer section.
 */



/**
 * Imports.
 */
import { FC }      from 'react';
import { Section } from 'section/section';
import BemHelper   from 'react-bem-helper';
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
	<Section className={ bemHelper() } position='last'>
		{ 'TODO: Add footer here' }
		<div className={ bemHelper( 'copyrightInfo' ) }>
			&copy;
			{ ' Copyright lolol' }
		</div>
	</Section>
);
