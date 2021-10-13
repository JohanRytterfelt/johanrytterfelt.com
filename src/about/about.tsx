/**
 * Module for the about section.
 */
import { AppContext }     from 'app/app';
import { FC, useContext } from 'react';
import { Section }        from 'section/section';
import { Text }           from 'text/text';
import { translate }      from 'translations/translations';
import BemHelper          from 'react-bem-helper';
import './about.pcss';

/**
 * BEM helper class instance.
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
{
	const { language } = useContext( AppContext );

	return (
		<Section background='white' className={ bemHelper() } position='intermediary'>
			<Text size='h3' tag='h2'>
				{
					translate(
						'About me',
						language
					)
				}
			</Text>
		</Section>
	);
};
