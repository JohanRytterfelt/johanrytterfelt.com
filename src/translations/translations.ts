/**
 * Module for translations.
 */

/**
 * Type for language alternatives.
 */
export type LanguagesType = 'en'|'sv';

/**
 * Dedicated tarnslations type to enforce translations for all language alternatives.
 */
type TranslationsType = { 'en': string; 'sv': string; }[];

/**
 * Default translation language. What else is there to say?
 */
const defaultTranslationLangage: LanguagesType = 'en';

/**
 * Complete translations list.
 */
const translations: TranslationsType =
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
];

/**
 * Translates a given string.
 * @param text Text to translate.
 * @param lang Language to translate into.
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
