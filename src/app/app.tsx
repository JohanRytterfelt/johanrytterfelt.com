/**
 * Main app component.
 */



/**
 * Imports.
 */
import { About }      from 'about/about';
import { Experience } from 'experience/experience';
import { FC }         from 'react';
import { Footer }     from 'footer/footer';
import { Hero }       from 'hero/hero';
import { Portfolio }  from 'portfolio/portfolio';
import { Skills }     from 'skills/skills';
import BemHelper      from 'react-bem-helper';
import './app.pcss';



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
 * React component.
 */
export const App: FC = () =>
{
	return (
		<div className={ bemHelper() }>
			<Hero />
			<About />
			<Skills />
			<Experience />
			<Portfolio />
			<Footer />
		</div>
	);
};
