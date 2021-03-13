/**
 * Config for PostCSS.
 */



/**
 * Imports.
 */
const variables = require( './variables.json' );



/**
 * Function for processing variables to allow recursion.
 *
 * @param object input Input to process.
 */
function processVariables( input, collectedVariables = {}, nestedKeyName = '' )
{
	for ( const key in input )
	{
		let newNestedKeyName;

		if ( nestedKeyName )
		{
			newNestedKeyName = nestedKeyName + key.charAt( 0 ).toUpperCase() + key.slice( 1 );
		}
		else
		{
			newNestedKeyName = key;
		}

		if ( input[ key ] && 'object' === typeof input[ key ] && ! ( input[ key ] instanceof Array ) )
		{

			processVariables(
				input[ key ],
				collectedVariables,
				newNestedKeyName,
			);
		}
		else
		{
			collectedVariables[ newNestedKeyName ] = input[ key ];
		}
	}

	return collectedVariables;
}



/**
 * Main config object.
 */
module.exports =
{
	plugins:
	{
		'postcss-css-variables':
		{
			variables: processVariables( variables ),
		},
		'postcss-functions':
		{
			functions:
			{
				convertTypographyUnitsToRem: ( value ) =>
				{
					// Since we base our typography system on MD we'll need to convert the specified size (see: https://material.io/design/typography/the-type-system.html#type-scale), and I'm not gonna sit around doing that by hand... Hence this simple function!
					return ( value * 0.0625 ).toString() + 'rem';
				},
			},
		},
		'postcss-nested'          : {},
		'postcss-nested-props'    : {},
		'postcss-nested-ancestors': {},
		'postcss-preset-env'      : {},
		'postcss-property-lookup' : {},
	},
};
