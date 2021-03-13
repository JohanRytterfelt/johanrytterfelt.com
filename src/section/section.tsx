/**
 * Module for handling section layout.
 */



/**
 * Imports.
 */
import { capitalize }    from 'strings/strings';
import { FC, ReactNode } from 'react';
import BemHelper         from 'react-bem-helper';
import './section.pcss';



/**
 * Types.
 */
type SectionPropsType =
{
	background?: 'gray'|'none'|'white';
	children   : ReactNode;
	className? : string;
	position   : 'first'|'intermediary'|'last';
};



/**
 * Constants.
 */
const bemHelper: BemHelper<string> = new BemHelper(
	{
		name          : 'section',
		outputIsString: true,
	}
);



/**
 * React component.
 */
export const Section: FC<SectionPropsType> = ( { background = 'none', children, className, position }: SectionPropsType ) =>
(
	<div
		className={
			bemHelper(
				{
					extra    : className,
					modifiers:
					{
						[ 'background' + capitalize( background ) ]: true,
						[ position ]                               : true,
					}
				}
			)
		}
	>
		{ children }
	</div>
);
