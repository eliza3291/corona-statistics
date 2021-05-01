/** Expected structure for the response of the endpoint */
export interface QueryResponse {
	objectIdFieldName?: string;
	uniqueIdField?: UniqueIdField;
	globalIdFieldName?: string;
	fields?: Field[];
	features?: Feature[];
	error?: Error;
}

/** Expected structure for the response of the endpoint when an error ocurred  */
export interface Error {
	code: number;
	message: string;
	details: string[];
}

/** Structure of UniqueIdField */
export interface UniqueIdField {
	name: string;
	isSystemMaintained: boolean;
}

/** Structure of the description of every field in the response */
export interface Field {
	name: string;
	type: string;
	alias: string;
	sqlType: string;
	length?: number;
	domain: string | null;
	defaultValue: string | null;
}

/** Structure of feature section in the response of the endpoint (Here is where the data comes.) */
export interface Feature {
	attributes: Attribute;
}

/** Structure of the data response */
export interface Attribute {
	cases: number;
	deaths: number;
	recovered: number;
	date: number;
	MeldeDatum: number;
}
