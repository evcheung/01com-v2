import { type SchemaTypeDefinition } from "sanity";

import pressReleases from "./schemas/pressReleases";
import reviewsAwards from "./schemas/reviewsAwards";
import investorRelationsVideos from "./schemas/investorRelationsVideos";
import newsletters from "./schemas/newsletters";
import investorRelationsFinancialResults from "./schemas/investorRelationsFinancialResults";
import investorRelationsLatestPresentation from "./schemas/investorRelationsLatestPresentation";
import investorRelationsRecentEvents from "./schemas/investorRelationsRecentEvents";
import imInTouchNewsUpdates from "./schemas/imInTouchNewsUpdates";
import imInTouchFAQCategories from "./schemas/imInTouchFAQCategories";
import imInTouchFAQs from "./schemas/imInTouchFAQs";
import imInTouchServerFAQCategories from "./schemas/imInTouchServerFAQCategories";
import imInTouchServerFAQs from "./schemas/imInTouchServerFAQs";

import blogPost from "./schemas/blogPost";
import blockContent from "./schemas/blockContent";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContent,
    blogPost,

    pressReleases,
    reviewsAwards,
    newsletters,
    investorRelationsVideos,
    investorRelationsLatestPresentation,
    investorRelationsRecentEvents,
    investorRelationsFinancialResults,
    imInTouchNewsUpdates,
    imInTouchFAQCategories,
    imInTouchFAQs,
    imInTouchServerFAQCategories,
    imInTouchServerFAQs,
  ],
};
