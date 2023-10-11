import { type SchemaTypeDefinition } from 'sanity'

import pressReleases from './schemas/pressReleases'
import reviewsAwards from './schemas/reviewsAwards'
import investorRelationsVideos from './schemas/investorRelationsVideos'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pressReleases, reviewsAwards, investorRelationsVideos]
}
