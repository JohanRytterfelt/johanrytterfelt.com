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
		en: 'Skills',
		sv: 'Kunskaper',
	},
	{
		en: 'Experience',
		sv: 'Arbetslivserfarenhet',
	},
	{
		en: 'Portfolio',
		sv: 'Portfolio',
	},
	{
		en: 'Web developer',
		sv: 'Webbutvecklare',
	}
] as const;



/**
 * Types utilizing const/readonly values.
 */
export type LanguagesType = keyof typeof translations[ number ];



/**
 * Constants.
 */
const defaultTranslationLangage = 'en' as const;



/**
 * Translates a given string.
 *
 * @param text Text to translate.
 * @param lang Language to translate into.
 *
 * @returns Translated string.
 */
export function translate( textInEnglish: typeof translations[ number ][ typeof defaultTranslationLangage ], lang: LanguagesType ): string
{
	for ( const translationConfig in translations )
	{
		const translation = translations[ translationConfig ];

		if ( translation[ defaultTranslationLangage ] === textInEnglish )
		{
			return translation[ lang ];
		}
	}

	return '';
}
