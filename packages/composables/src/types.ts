import {
  ProductsSearchParams
} from '@vue-storefront/core';
import type { FilterProp, Searchable, Sortable } from '@pavlendi/vsf-ordercloud-api';

export type TODO = any;

export type UseBillingAddParams = TODO;

export type UseCategorySearchParams = {
  catalogID?: string;
  depth?: number | 'all';
  filters?: {
    [key: string]: FilterProp
  };
  page?: number;
  pageSize?: number;
  productID?: number;
  search?: string;
  searchOn?: Searchable<'Me.ListCategories'>;
  sortBy?: Sortable<'Me.ListCategories'>;
};

export type UseFacetSearchParams = TODO;

export type UseProductSearchParams = ProductsSearchParams;

export type UseReviewSearchParams = TODO;

export type UseReviewAddParams = TODO;

export type UseShippingAddParams = TODO;

export type UseStoreFilterParams = TODO;

export type UseUserUpdateParams = TODO;

export type UseUserRegisterParams = TODO;

export type useUserOrderSearchParams = TODO;
