/**
 * Module for handling section layout.
 */
import { capitalize }    from 'strings/strings';
import { FC, ReactNode } from 'react';
import BemHelper         from 'react-bem-helper';
import './section.pcss';

/**
 * React component props type.
 */
type SectionPropsType =
{
	background?: 'gray'|'none'|'white';
	children   : ReactNode;
	className? : string;
	position   : 'first'|'intermediary'|'last';
};

/**
 * BEM helper class instance.
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
