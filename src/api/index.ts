import { ofetch } from 'ofetch';
import { toast } from 'react-toastify';

export const apiFetch = ofetch.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  credentials: 'include',
  retry: 0,
  onResponseError: error => {
    toast.error(error.error?.message || 'Something went wrong');
  },
});
