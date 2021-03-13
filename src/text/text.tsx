/**
 * Module for standardizing text nodes.
 */



/**
 * Imports.
 */
import { createElement, FC, ReactNode } from 'react';
import BemHelper                        from 'react-bem-helper';
import './text.pcss';



/**
 * Types.
 */
type AboutPropsType =
{
	children  : ReactNode;
	inline?   : boolean;
	noMargins?: boolean;
	// We base or sizes on MD typography. See: https://material.io/design/typography/the-type-system.html#type-scale for more info.
	size?: 'body1'|'body2'|'button'|'caption'|'h1'|'h2'|'h3'|'h4'|'h5'|'h6'|'overline'|'subtitle1'|'subtitle2';
	tag? : keyof HTMLElementTagNameMap;
};



/**
 * Constants.
 */
const bemHelper: BemHelper<string> = new BemHelper(
	{
		name          : 'text',
		outputIsString: true,
	}
);



/**
 * React component.
 */
export const Text: FC<AboutPropsType> = ( { children, inline = false, noMargins = false, size = 'body1', tag = 'p' }: AboutPropsType ) =>
{
	return createElement(
		tag,
		{
			className: bemHelper(
				{
					modifiers:
					{
						[ size ]: true,
						inline  : inline,
						margins : true !== noMargins,
					}
				}
			),
		},
		children
	);
};
