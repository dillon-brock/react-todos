import { client } from './client';

export async function authUser(email, password, type) {
  let response = type === 'sign-in' ?
    await client.auth.signIn({ email, password }) :
    await client.auth.signUp({ email, password });

  return response.user;
}

export const getUser = () => client.auth.currentUser;

export const signOut = async () => {
  await client.auth.signOut();
};

