import { type SchemaTypeDefinition } from 'sanity'

import pressReleases from './schemas/pressReleases'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pressReleases],
}
