/**
 * Production environment.
 * Definition of the require endpoints for the requests.
 */
export const environment = {
	production: true,
	arcgisCoronaGermany: {
		url: 'https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_COVID19/FeatureServer/0/query'
	},
	arcgisCoronaStates: {
		url: 'https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_COVID19/FeatureServer/0/query'
	}
};
