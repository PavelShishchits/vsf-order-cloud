import { apiClientFactory } from '@vue-storefront/core';
import { Configuration, ApiRole } from 'ordercloud-javascript-sdk';
import type { Settings, Endpoints } from './types';
import * as api from './api';

function buildConfig(settings: Settings) {
  return {
    ...settings,
    scope: (settings.scope as unknown as string).split(',') as ApiRole[]
  };
}

function onCreate(settings: Settings) {

  const config = buildConfig(settings);

  if (!config?.client) {
    return init(config);
  }

  return {
    config,
    client: config.client
  };
}

function init(settings: Settings): { config: Settings; client: Settings['client']} {

  Configuration.Set({
    baseApiUrl: settings.api.baseApiUrl,
    clientID: settings.api.clientID
  });

  const clientConfiguration = Configuration.Get();

  // toDo (client) set axios instance from OC sdk
  return {
    config: settings,
    client: clientConfiguration
  };
}

const { createApiClient } = apiClientFactory<Settings, Endpoints>({
  onCreate,
  api: api
});

export {
  createApiClient,
  init
};
