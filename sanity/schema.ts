import { type SchemaTypeDefinition } from "sanity";

import pressReleases from "./schemas/pressReleases";
import reviewsAwards from "./schemas/reviewsAwards";
import investorRelationsVideos from "./schemas/investorRelationsVideos";
import newsletters from "./schemas/newsletters";
import investorRelationsFinancialResults from "./schemas/investorRelationsFinancialResults";
import investorRelationsLatestPresentation from "./schemas/investorRelationsLatestPresentation";
import investorRelationsRecentEvents from "./schemas/investorRelationsRecentEvents";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    pressReleases,
    reviewsAwards,
    newsletters,
    investorRelationsVideos,
    investorRelationsLatestPresentation,
    investorRelationsRecentEvents,
    investorRelationsFinancialResults,
  ],
};
