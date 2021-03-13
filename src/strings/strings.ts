/**
 * String functions.
 */



/**
 * Capitalizes the given string. Based upon: https://stackoverflow.com/a/1026087.
 *
 * @param str String to capitalize.
 *
 * @returns Capitalized string.
 */
export function capitalize( str: string ): string
{
	return str.charAt( 0 ).toUpperCase() + str.slice( 1 );
}
