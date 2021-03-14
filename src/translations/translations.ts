/**
 * Module for translations.
 */



/**
 * Complete translations list..
 */
const translations =
[
	{
		en: 'About me',
		sv: 'Om mig',
	},
	{
		en: 'Lorem2',
		sv: 'Lorem2',
	},
] as const;



/**
 * Types utilizing const/readonly values.
 */
export type LanguagesType = keyof typeof translations[ number ];



/**
 * Constants.
 */
const defaultLangage: LanguagesType = 'sv';



/**
 * Translates a given string.
 *
 * @param text Text to translate.
 * @param lang Language to translate into.
 *
 * @returns Translated string.
 */
export function translate( text: typeof translations[ number ][ 'sv' ], lang: LanguagesType ): string
{
	for ( const translationConfig in translations )
	{
		const translation = translations[ translationConfig ];

		if ( translation[ defaultLangage ] === text )
		{
			return translation[ lang ];
		}
	}

	return '';
}
