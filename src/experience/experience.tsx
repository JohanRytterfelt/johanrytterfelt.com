/**
 * Module for the experience section.
 */



/**
 * Imports.
 */
import { AppContext }     from 'app/app';
import { FC, useContext } from 'react';
import { Section }        from 'section/section';
import { Text }           from 'text/text';
import { translate }      from 'translations/translations';
import BemHelper          from 'react-bem-helper';
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
{
	const { language } = useContext( AppContext );

	return (
		<Section background='white' className={ bemHelper() } position='intermediary'>
			<Text size='h3' tag='h2'>
				{
					translate(
						'Experience',
						language
					)
				}
			</Text>
		</Section>
	);
};
