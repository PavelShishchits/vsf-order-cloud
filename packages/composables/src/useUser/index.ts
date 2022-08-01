import {
  Context,
  useUserFactory,
  UseUserFactoryParams
} from '@vue-storefront/core';
import type { User } from '@vue-storefront/ordercloud-api';
import type {
  UseUserUpdateParams as UpdateParams,
  UseUserRegisterParams as RegisterParams
} from '../types';

const params: UseUserFactoryParams<User, UpdateParams, RegisterParams> = {
  load: async (context: Context) => {
    // toDo load existing user
    await context.$ordercloud.api.initUser();
    return null;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  logOut: async (context: Context) => {
    console.log('Mocked: useUser.logOut');
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateUser: async (context: Context, { currentUser, updatedUserData }) => {
    console.log('Mocked: useUser.updateUser');
    return {};
  },

  register: async (context: Context, params) => {
    console.log('Mocked: useUser.register');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { customQuery, ...userRegistrationParams } = params;
    const { errors } = await context.$ordercloud.api.registerUser({
      Username: userRegistrationParams.FirstName + ' ' + userRegistrationParams.LastName,
      ...userRegistrationParams
    });
    if (errors?.length > 0) {
      throw new Error(errors.join(','));
    }
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  logIn: async (context: Context, { username, password }) => {
    console.log('Mocked: useUser.logIn');
    return {};
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  changePassword: async (context: Context, { currentUser, currentPassword, newPassword }) => {
    console.log('Mocked: useUser.changePassword');
    return {};
  }
};

export const useUser = useUserFactory<User, UpdateParams, RegisterParams>(params);
