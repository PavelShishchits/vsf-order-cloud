import {
  Context,
  useCategoryFactory,
  UseCategoryFactoryParams
} from '@vue-storefront/core';
import type { Category } from '@vue-storefront/ordercloud-api';
import type {
  UseCategorySearchParams as SearchParams
} from '../types';

const params: UseCategoryFactoryParams<Category, SearchParams> = {
  categorySearch: async (context: Context, params) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { customQuery, ...categoriesListParams } = params;

    const data = await context.$ordercloud.api.listCategories(categoriesListParams);
    return data.Items;
  }
};

export const useCategory = useCategoryFactory<Category, SearchParams>(params);
