import type {DefaultDocumentNodeResolver, StructureResolver} from 'sanity/structure'

import {BlogPostPreview} from './preview/BlogPostPreview'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items(S.documentTypeListItems())

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, {schemaType}) => {
  if (schemaType === 'blogPost') {
    return S.document().views([
      S.view.form(),
      S.view.component(BlogPostPreview).id('preview').title('Preview'),
    ])
  }

  return S.document()
}
