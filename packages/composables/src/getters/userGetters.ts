import { UserGetters } from '@vue-storefront/core';
import type { User } from '@brimit_psh/vsf-ordercloud-api';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getFirstName(user: User): string {
  console.log('getFirstName', user);
  return '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getLastName(user: User): string {
  return '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getFullName(user: User): string {
  return '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getEmailAddress(user: User): string {
  return '';
}

export const userGetters: UserGetters<User> = {
  getFirstName,
  getLastName,
  getFullName,
  getEmailAddress
};
