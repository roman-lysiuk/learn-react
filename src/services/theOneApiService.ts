import { Character, ResponseServer } from 'interfaces';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const url: string = import.meta.env.VITE_URL;
const token: string = import.meta.env.VITE_TOKEN;

export const theOneApiService = createApi({
  reducerPath: 'characterService',
  tagTypes: ['Characters'],
  baseQuery: fetchBaseQuery({
    baseUrl: `${url}`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }),
  endpoints: (build) => ({
    getAllCharacter: build.query<Character[], number>({
      query: (limit: number = 100) => ({
        url: 'character',
        params: {
          limit: limit,
        },
      }),
      providesTags: (result = []) =>
        result
          ? [
              ...result.map(({ _id }) => ({ type: 'Characters' as const, _id })),
              { type: 'Characters', id: 'LIST' },
            ]
          : [{ type: 'Characters', id: 'LIST' }],
      transformResponse: (response: ResponseServer<Character>) => response.docs,
    }),

    searchCharacterForName: build.query<Character[], string>({
      query: (name: string) => ({
        url: `character`,
        params: {
          name: `/${name}/i`,
        },
      }),
      transformResponse: (response: ResponseServer<Character>) => response.docs,
    }),

    searchCharacterForID: build.query<Character, string>({
      query: (id: string) => ({
        url: `character/${id}`,
      }),
      transformResponse: (response: ResponseServer<Character>) => response.docs[0],
    }),
  }),
});
export const {
  useGetAllCharacterQuery,
  useLazyGetAllCharacterQuery,
  useSearchCharacterForIDQuery,
  useLazySearchCharacterForNameQuery,
  useSearchCharacterForNameQuery,
} = theOneApiService;
