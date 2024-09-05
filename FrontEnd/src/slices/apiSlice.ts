import { fetchBaseQuery, createApi, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constants';
import { logout } from './authSlice';
import { RootState } from '../store';

// Configuración base para las solicitudes API
const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    // TODO: realizar la validacion para el token
    // const token = (getState() as RootState).auth.token;
    // if (token) {
    //   headers.set('Authorization', `Bearer ${token}`);
    // }
    return headers;
  },
});

// Función que intercepta la respuesta y maneja errores 401
const baseQueryWithAuth = async (
  args: string | { url: string; method?: string; body?: unknown },
  api: any,
  extraOptions: any
) => {
  const result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    api.dispatch(logout());
  }

  return result;
};

// Definición del apiSlice usando la consulta personalizada
export const apiSlice = createApi({
  baseQuery: baseQueryWithAuth,
  tagTypes: ['Product', 'Order', 'User'],
  endpoints: (builder) => ({}),
});
