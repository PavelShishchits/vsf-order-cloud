import { ApiRole, SdkConfiguration } from './ordercloud';

export type Settings = {
  client?: any;
  api: SdkConfiguration;
  scope: ApiRole[];
};
