import { checkError, client } from './client';

export async function getTodos() {
  const response = await client.from('todos').select();

  return checkError(response);
}

export async function createNewTodo(description) {
  const response = await client.from('todos').insert({ description });

  return checkError(response);
}