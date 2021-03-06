export default {
  // the site's root Notion page (required)
  rootNotionPageId: '0277288c2e3047b59baa60a5b18bdbed',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: '',

  // basic site info (required)
  name: 'Transitive Bullshit',
  domain: 'notion.paulapplegate.com',
  author: 'Travis Fischer',

  // open graph metadata (optional)
  description: 'Personal site of Travis Fischer aka Transitive Bullshit',

  // social usernames (optional)
  twitter: 'transitive_bs',
  github: 'transitive-bullshit',
  linkedin: 'fisch2',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: 'https://transitivebullsh.it/page-icon.png',
  defaultPageCover: 'https://transitivebullsh.it/page-cover.jpg',
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: false,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  pageUrlAdditions: {
    '/the-social-audio-revolution': 'c4deaf33cc924ad7a5b9f69c6ae04a01'
  }
}
