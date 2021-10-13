/**
 * Module for the hero image.
 */
import { AppContext }     from 'app/app';
import { FC, useContext } from 'react';
import { LanguagePicker } from 'languagePicker/languagePicker';
import { Section }        from 'section/section';
import { Text }           from 'text/text';
import { translate }      from 'translations/translations';
import BemHelper          from 'react-bem-helper';
import './hero.pcss';

/**
 * BEM helper class instance.
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
{
	const { language } = useContext( AppContext );

	return (
		<Section className={ bemHelper() } position='first'>
			<Text className={ bemHelper( 'heading' ) } color='light' size='h2' tag='h1'>
				{ 'Johan Rytterfelt' }
			</Text>
			<Text className={ bemHelper( 'heading' ) } color='light' size='h4' tag='h2'>
				{
					translate(
						'Web developer',
						language
					)
				}
			</Text>
			<LanguagePicker className={ bemHelper( 'languagePicker' ) } />
			<div className={ bemHelper( 'portrait' ) } />
			<div className={ bemHelper( 'portraitBackground' ) } />
		</Section>
	);
};
