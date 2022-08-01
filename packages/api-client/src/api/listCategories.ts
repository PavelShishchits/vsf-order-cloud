import { Me } from 'ordercloud-javascript-sdk';
import type { Category, ListPage } from '../types';
import {
  Context
} from '@vue-storefront/core';

export async function listCategories(context: Context, params: Record<string, unknown> = {}): Promise<ListPage<Category>> {
  try {
    return await Me.ListCategories(params);
  } catch (e) {
    console.log(e);
  }
}
