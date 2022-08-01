import { Tokens, Auth } from 'ordercloud-javascript-sdk';
import {
  Context
} from '@vue-storefront/core';

export async function initUser(context: Context): Promise<void> {
  try {
    if (!Tokens.GetAccessToken()) {
      const response = await Auth.Anonymous(context.config.api.clientID, context.config.scope);
      if (response) {
        Tokens.SetAccessToken(response.access_token);
      }
    }
  } catch (e) {
    console.log('initUser:error', e.errors);
  }
}
