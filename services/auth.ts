import { API_URL } from '@/constants/common';
import fetchJson, { type FetchJsonResponse } from '@/libs/fetch-json';
import type { Player } from '@/schemas/player';

export type LoginPayload = {
  username: string;
  password: string;
};

export type RegisterPayload = {
  name: string;
  username: string;
  password: string;
};

export type LoginResponse = FetchJsonResponse & {
  data: { player: Player; token: string };
};

export type RegisterResponse = FetchJsonResponse & {
  data: Player;
};

export const login = async (payload: LoginPayload) => {
  try {
    const res = (await fetchJson(`${API_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...payload
      })
    })) as LoginResponse;

    return res;
  } catch (err) {
    throw err;
  }
};

export const register = async (payload: RegisterPayload) => {
  try {
    const res = (await fetchJson(`${API_URL}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...payload
      })
    })) as RegisterResponse;

    return res;
  } catch (err) {
    throw err;
  }
};
