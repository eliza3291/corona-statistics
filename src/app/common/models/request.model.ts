export interface QueryResponse {
	objectIdFieldName?: string;
	uniqueIdField?: UniqueIdField;
	globalIdFieldName?: string;
	fields?: Field[];
	features?: Feature[];
	error?: Error;
}

export interface Error {
	code: number;
	message: string;
	details: string[];
}

export interface UniqueIdField {
	name: string;
	isSystemMaintained: boolean;
}

export interface Field {
	name: string;
	type: string;
	alias: string;
	sqlType: string;
	length?: number;
	domain: string | null;
	defaultValue: string | null;
}

export interface Feature {
	attributes: Attribute;
}

export interface Attribute {
	cases: number;
	deaths: number;
	recovered: number;
	date: number;
	MeldeDatum: number;
}
