import { Me, Tokens } from 'ordercloud-javascript-sdk';
import type { MeUser, ApiResponse } from '../types';
import {
  Context
} from '@vue-storefront/core';

export async function registerUser(context: Context, params: MeUser): Promise<ApiResponse> {
  try {
    const anonUserToken = Tokens.GetAccessToken();
    const response = await Me.Register(params, { anonUserToken });
    Tokens.SetAccessToken(response.access_token);
    return {
      data: response,
      errors: null
    };
  } catch (e) {
    if (e.isOrderCloudError) {
      return {
        data: null,
        errors: e.errors.Errors.map((error) => error.Message)
      };
    }
  }
}
