
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

  export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://coinranking1.p.rapidapi.com',
     prepareHeaders:(header)=>{
     header.set('X-RapidAPI-Host', 'coinranking1.p.rapidapi.com')
     header.set('X-RapidAPI-Key', '0c5f7c1905msh1d4d4410424e97fp10fe75jsnb0d91bbafb12')
  return header;
    } ,
}),
  endpoints: (builder) => ({
    getCoins: builder.query({
      query: () => `/coins`,
    }),
    getCoin: builder.query({
      query: (id) => `/coin/${id}`,
    }),
  }),
})

export const { useGetCoinsQuery, useGetCoinQuery } = cryptoApi



