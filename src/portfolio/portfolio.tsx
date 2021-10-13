/**
 * Module for the portfolio section.
 */
import { AppContext }     from 'app/app';
import { FC, useContext } from 'react';
import { Section }        from 'section/section';
import { Text }           from 'text/text';
import { translate }      from 'translations/translations';
import BemHelper          from 'react-bem-helper';
import './portfolio.pcss';

/**
 * BEM helper class instance.
 */
const bemHelper: BemHelper<string> = new BemHelper(
	{
		name          : 'portfolio',
		outputIsString: true,
	}
);

/**
 * React component.
 */
export const Portfolio: FC = () =>
{
	const { language } = useContext( AppContext );

	return (
		<Section background='gray' className={ bemHelper() } position='intermediary'>
			<Text size='h3' tag='h2'>
				{
					translate(
						'Portfolio',
						language
					)
				}
			</Text>
		</Section>
	);
};
