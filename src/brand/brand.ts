/**
 * Single source of truth for which brand the site wears.
 *
 * To switch the whole site to NOREC: change ACTIVE to 'norec'.
 * Everything else — accent colour, logo files, wordmark, legal footer —
 * follows from here.
 */

export type BrandKey = 'raulceron' | 'norec';

export const ACTIVE: BrandKey = 'raulceron';

export const BRANDS = {
  raulceron: {
    key: 'raulceron',
    name: 'Raúl Cerón',
    wordmark: 'RAÚL CERÓN',
    legalName: 'Raúl Eugenio Cerón Pineda',
    nif: 'Z2270530K',
    accent: '#b0663a',
    accentStrong: '#8c4e2b',
    logo: '/brand/raulceron/logo-horizontal.svg',
    logoReversed: '/brand/raulceron/logo-horizontal-reversed.svg',
    mark: '/brand/raulceron/mark.svg',
    favicon: '/brand/raulceron/favicon.svg',
    email: 'hola@raulceron.es',
    domain: 'raulceron.es',
  },
  norec: {
    key: 'norec',
    name: 'NOREC',
    wordmark: 'NOREC',
    legalName: 'Raúl Eugenio Cerón Pineda',
    nif: 'Z2270530K',
    accent: '#3d7f97',
    accentStrong: '#2f6478',
    logo: '/brand/norec/logo-horizontal.svg',
    logoReversed: '/brand/norec/logo-horizontal-reversed.svg',
    mark: '/brand/norec/mark.svg',
    favicon: '/brand/norec/favicon.svg',
    email: 'hola@raulceron.es',
    domain: 'raulceron.es',
  },
} as const;

export const brand = BRANDS[ACTIVE];
