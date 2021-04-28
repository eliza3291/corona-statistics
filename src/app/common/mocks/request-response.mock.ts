import { QueryResponse } from '../models';

export const RESPONSE_GERMANY_DATA: QueryResponse = {
  objectIdFieldName: 'ObjectId',
  uniqueIdField: {
    name: 'ObjectId',
    isSystemMaintained: true
  },
  globalIdFieldName: '',
  fields: [
    {
      name: 'cases',
      type: 'esriFieldTypeDouble',
      alias: 'cases',
      sqlType: 'sqlTypeFloat',
      domain: null,
      defaultValue: null
    },
    {
      name: 'deaths',
      type: 'esriFieldTypeDouble',
      alias: 'deaths',
      sqlType: 'sqlTypeFloat',
      domain: null,
      defaultValue: null
    },
    {
      name: 'recovered',
      type: 'esriFieldTypeDouble',
      alias: 'recovered',
      sqlType: 'sqlTypeFloat',
      domain: null,
      defaultValue: null
    },
    {
      name: 'date',
      type: 'esriFieldTypeDouble',
      alias: 'date',
      sqlType: 'sqlTypeFloat',
      domain: null,
      defaultValue: null
    },
    {
      name: 'Meldedatum',
      type: 'esriFieldTypeDate',
      alias: 'Meldedatum',
      sqlType: 'sqlTypeOther',
      length: 0,
      domain: null,
      defaultValue: null
    }
  ],
  features: [
    { attributes: { cases: 12343, deaths: 35, recovered: 977, date: 1618790400000, MeldeDatum: 1618790400000 } },
    { attributes: { cases: 27983, deaths: 44, recovered: 1146, date: 1618876800000, MeldeDatum: 1618876800000 } },
    { attributes: { cases: 29453, deaths: 29, recovered: 820, date: 1618963200000, MeldeDatum: 1618963200000 } },
    { attributes: { cases: 25287, deaths: 21, recovered: 396, date: 1619049600000, MeldeDatum: 1619049600000 } },
    { attributes: { cases: 22651, deaths: 17, recovered: 286, date: 1619136000000, MeldeDatum: 1619136000000 } },
    { attributes: { cases: 17562, deaths: 8, recovered: 156, date: 1619222400000, MeldeDatum: 1619222400000 } },
    { attributes: { cases: 8388, deaths: 5, recovered: 56, date: 1619308800000, MeldeDatum: 1619308800000 } },
    { attributes: { cases: 7638, deaths: 8, recovered: 51, date: 1619395200000, MeldeDatum: 1619395200000 } }
  ]
};

export const RESPONSE_STATE_DATA: QueryResponse = {
  objectIdFieldName: 'ObjectId',
  uniqueIdField: { name: 'ObjectId', isSystemMaintained: true },
  globalIdFieldName: '',
  fields: [
    {
      name: 'cases',
      type: 'esriFieldTypeDouble',
      alias: 'cases',
      sqlType: 'sqlTypeFloat',
      domain: null,
      defaultValue: null
    },
    {
      name: 'deaths',
      type: 'esriFieldTypeDouble',
      alias: 'deaths',
      sqlType: 'sqlTypeFloat',
      domain: null,
      defaultValue: null
    },
    {
      name: 'recovered',
      type: 'esriFieldTypeDouble',
      alias: 'recovered',
      sqlType: 'sqlTypeFloat',
      domain: null,
      defaultValue: null
    },
    {
      name: 'date',
      type: 'esriFieldTypeDouble',
      alias: 'date',
      sqlType: 'sqlTypeFloat',
      domain: null,
      defaultValue: null
    },
    {
      name: 'IdBundesland',
      type: 'esriFieldTypeInteger',
      alias: 'IdBundesland',
      sqlType: 'sqlTypeInteger',
      domain: null,
      defaultValue: null
    },
    {
      name: 'Meldedatum',
      type: 'esriFieldTypeDate',
      alias: 'Meldedatum',
      sqlType: 'sqlTypeOther',
      length: 0,
      domain: null,
      defaultValue: null
    },
    {
      name: 'Bundesland',
      type: 'esriFieldTypeString',
      alias: 'Bundesland',
      sqlType: 'sqlTypeNVarchar',
      length: 2147483647,
      domain: null,
      defaultValue: null
    }
  ],
  features: [
    {
      attributes: {
        cases: 260,
        deaths: 3,
        recovered: 24,
        date: 1618790400000,
        MeldeDatum: 1618790400000
      }
    },
    {
      attributes: {
        cases: 536,
        deaths: 0,
        recovered: 29,
        date: 1618876800000,
        MeldeDatum: 1618876800000
      }
    },
    {
      attributes: {
        cases: 817,
        deaths: 1,
        recovered: 39,
        date: 1618963200000,
        MeldeDatum: 1618963200000
      }
    },
    {
      attributes: {
        cases: 519,
        deaths: 0,
        recovered: 13,
        date: 1619049600000,
        MeldeDatum: 1619049600000
      }
    },
    {
      attributes: {
        cases: 491,
        deaths: 0,
        recovered: 5,
        date: 1619136000000,
        MeldeDatum: 1619136000000
      }
    },
    {
      attributes: {
        cases: 381,
        deaths: 1,
        recovered: 4,
        date: 1619222400000,
        MeldeDatum: 1619222400000
      }
    },
    {
      attributes: {
        cases: 207,
        deaths: 0,
        recovered: 2,
        date: 1619308800000,
        MeldeDatum: 1619308800000
      }
    },
    {
      attributes: {
        cases: 104,
        deaths: 0,
        recovered: 1,
        date: 1619395200000,
        MeldeDatum: 1619395200000
      }
    }
  ]
};

export const RESPONSE_BAD_REQUEST_DATA: QueryResponse = {
  error: { code: 400, message: '', details: ['"outStatistics" parameter is invalid'] }
};

export const RESPONSE_NO_DATA: QueryResponse = {
  objectIdFieldName: 'ObjectId',
  uniqueIdField: { name: 'ObjectId', isSystemMaintained: true },
  globalIdFieldName: '',
  features: []
};
