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
    console.log('Mocked: useCategory.categorySearch');

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { customQuery, ...categoriesListParams } = params;

    const data = await context.$ordercloud.api.listCategories(categoriesListParams);
    console.log('useCategory', data);
    return data.Items;

    // return [
    //   {
    //     id: 1,
    //     name: 'Women',
    //     slug: 'women',
    //     items: []
    //   },
    //   {
    //     id: 2,
    //     name: 'Men',
    //     slug: 'men',
    //     items: []
    //   },
    //   {
    //     id: 3,
    //     name: 'Kids',
    //     slug: 'kids',
    //     items: []
    //   }
    // ];
  }
};

export const useCategory = useCategoryFactory<Category, SearchParams>(params);
