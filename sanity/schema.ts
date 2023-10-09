import { type SchemaTypeDefinition } from 'sanity'

import pressReleases from './schemas/pressReleases'
import reviewsAwards from './schemas/reviewsAwards'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pressReleases, reviewsAwards],
}
