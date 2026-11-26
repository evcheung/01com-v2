import { type SchemaTypeDefinition } from 'sanity'
import { blogType } from './blogType'
import { newsletterType } from './newsletterTypes'
import { newsType } from './newsType'
import { releasesType } from './releasesType'
import { rewardsType } from './rewardsType'
import { videoType } from './videoType'
import { investorRelationsLatestPresentationType, investorRelationsRecentEventsType, investorRelationsFinancialResultsType, investorRelationsVideosType } from './investorType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [videoType, blogType, newsletterType, newsType, releasesType, rewardsType, investorRelationsLatestPresentationType, investorRelationsRecentEventsType, investorRelationsFinancialResultsType, investorRelationsVideosType],
}
