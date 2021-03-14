/**
 * Main app component.
 */



/**
 * Imports.
 */
import { About }         from 'about/about';
import {
	createContext,
	FC,
	useState,
}                        from 'react';
import { Experience }    from 'experience/experience';
import { Footer }        from 'footer/footer';
import { Hero }          from 'hero/hero';
import { LanguagesType } from 'translations/translations';
import { Portfolio }     from 'portfolio/portfolio';
import { Skills }        from 'skills/skills';
import BemHelper         from 'react-bem-helper';
import WebFont           from 'webfontloader';
import './app.pcss';



/**
 * Types.
 */
type AppContextPropsType =
{
	language   : LanguagesType;
	setLanguage: ( lang: LanguagesType ) => void;
};



/**
 * Constants.
 */
const bemHelper: BemHelper<string> = new BemHelper(
	{
		name          : 'app',
		outputIsString: true,
	}
);



/**
 * Webfont setup.
 */
WebFont.load(
	{
		google:
		{
			families:
			[
				'Roboto:300,400,700',
			],
		}
	}
);



/**
 * Global context.
 */
export const AppContext = createContext<Partial<AppContextPropsType>>( {} );



/**
 * React component.
 */
export const App: FC = () =>
{
	const [ language, setLanguage ] = useState<LanguagesType>( 'sv' );

	return (
		<AppContext.Provider
			value={
				{
					language   : language,
					setLanguage: setLanguage,
				}
			}
		>
			<div className={ bemHelper() }>
				<Hero />
				<About />
				<Skills />
				<Experience />
				<Portfolio />
				<Footer />
			</div>
		</AppContext.Provider>
	);
};
