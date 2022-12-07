module.exports = {
  integrations: {
    ordercloud: {
      location: '@brimit_psh/vsf-ordercloud-api/server',
      configuration: {
        api: {
          baseApiUrl: process.env.VSF_ORDERCLOUD_API_URL,
          clientID: process.env.VSF_ORDERCLOUD_CLIENT_ID,
        },
        scope: process.env.VSF_ORDERCLOUD_ROLES
      }
    }
  }
};
