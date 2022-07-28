import { Me, ListPage } from 'ordercloud-javascript-sdk';
import { Category } from '../types';
import {
  Context,
  Logger
} from '@vue-storefront/core';

export async function listCategories(context: Context, params: Record<string, unknown> = {}): Promise<ListPage<Category>> {
  try {
    Logger.debug('listCategories:params', { params });
    console.log('listCategories:params', params);
    return await Me.ListCategories(params);
  } catch (e) {
    console.log(e);
  }
}
