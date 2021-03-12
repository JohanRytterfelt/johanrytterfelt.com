/**
 * Module for the hero image.
 */



/**
 * Imports.
 */
import { FC }    from 'react';
import BemHelper from 'react-bem-helper';
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
	<div className={ bemHelper() }>
		<h1 className={ bemHelper( 'heading' ) }>
			{ 'TODO: Add heading here' }
		</h1>
	</div>
);
