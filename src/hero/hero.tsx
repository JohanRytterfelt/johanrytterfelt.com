/**
 * Module for the hero image.
 */



/**
 * Imports.
 */
import { FC }             from 'react';
import { LanguagePicker } from 'languagePicker/languagePicker';
import { Section }        from 'section/section';
import { Text }           from 'text/text';
import BemHelper          from 'react-bem-helper';
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
		<Text className={ bemHelper( 'heading' ) } color='light' size='h2' tag='h1'>
			{ 'TODO: Add heading here' }
		</Text>
		<LanguagePicker className={ bemHelper( 'languagePicker' ) } />
		<div className={ bemHelper( 'portrait' ) } />
		<div className={ bemHelper( 'portraitBackground' ) } />
	</Section>
);
