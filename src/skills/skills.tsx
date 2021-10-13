/**
 * Module for the skills section.
 */
import { AppContext }     from 'app/app';
import { FC, useContext } from 'react';
import { Section }        from 'section/section';
import { Text }           from 'text/text';
import { translate }      from 'translations/translations';
import BemHelper          from 'react-bem-helper';
import './skills.pcss';

/**
 * BEM helper class instance.
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
{
	const { language } = useContext( AppContext );

	return (
		<Section background='gray' className={ bemHelper() } position='intermediary'>
			<Text size='h3' tag='h2'>
				{
					translate(
						'Skills',
						language
					)
				}
			</Text>
		</Section>
	);
};
