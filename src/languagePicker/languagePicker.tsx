/**
 * Module for the skills section.
 */
import { AppContext }         from 'app/app';
import {
	FC,
	MouseEvent,
	useCallback,
	useContext,
}                             from 'react';
// @ts-ignore
import { GB as Gb, SE as Se } from 'country-flag-icons/react/3x2';
import { LanguagesType }      from 'translations/translations';
import { Text }               from 'text/text';
import BemHelper              from 'react-bem-helper';
import './languagePicker.pcss';

/**
 * Prop type for the React component.
 */
type LanguagePickerPropsType =
{
	className?: string;
};

/**
 * BEM helper class instance.
 */
const bemHelper: BemHelper<string> = new BemHelper(
	{
		name          : 'languagePicker',
		outputIsString: true,
	}
);

/**
 * React component.
 */
export const LanguagePicker: FC<LanguagePickerPropsType> = ( { className }: LanguagePickerPropsType ) =>
{
	const { language, setLanguage } = useContext( AppContext );

	const handleLanguageChange = useCallback(
		( evt: MouseEvent<HTMLButtonElement> ): void =>
		{
			setLanguage(
				evt.currentTarget.getAttribute( 'data-lang' ) as LanguagesType
			);
		},
		[
			setLanguage,
		]
	);

	return (
		<div
			className={
				bemHelper(
					{
						extra: className,
					}
				)
			}
		>
			<button
				aria-label='Change language to english'
				className={
					bemHelper(
						{
							element  : 'button',
							modifiers:
							{
								active: 'en' === language,
							},
						}
					)
				}
				data-lang='en'
				onClick={ handleLanguageChange }
				type='button'
			>
				<Gb className={ bemHelper( 'flag' ) } />
				<Text
					align='center'
					className={ bemHelper( 'text' ) }
					color='light'
					noMargins
					size='caption'
					tag='span'
				>
					{ 'En' }
				</Text>
			</button>
			<button
				aria-label='Byt språk till svenska'
				className={
					bemHelper(
						{
							element  : 'button',
							modifiers:
							{
								active: 'sv' === language,
							},
						}
					)
				}
				data-lang='sv'
				onClick={ handleLanguageChange }
				type='button'
			>
				<Se className={ bemHelper( 'flag' ) } />
				<Text
					align='center'
					className={ bemHelper( 'text' ) }
					color='light'
					noMargins
					size='caption'
					tag='span'
				>
					{ 'Sv' }
				</Text>
			</button>
		</div>
	);
};
