import { type SchemaTypeDefinition } from 'sanity'
import { blogType } from './blogType'
import { newsletterType } from './newsletterTypes'
import { newsType } from './newsType'
import { releasesType } from './releasesType'
import { rewardsType } from './rewardsType'
import { investorRelationsLatestPresentationType, investorRelationsRecentEventsType, investorRelationsFinancialResultsType, investorRelationsVideosType } from './investorType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogType, newsletterType, newsType, releasesType, rewardsType, investorRelationsLatestPresentationType, investorRelationsRecentEventsType, investorRelationsFinancialResultsType, investorRelationsVideosType],
}
