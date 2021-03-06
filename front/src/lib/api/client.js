import applyCaseMiddleware from 'axios-case-converter';
import axios from 'axios';
import Cookies from "js-cookie";

const options = {
  ignoreHeaders: true 
}

export const headers = {
  headers: {
    'access-token': Cookies.get('_access_token'),
    'client': Cookies.get('_client'),
    'uid': Cookies.get('_uid')
  }
};

const client = applyCaseMiddleware(
  axios.create({
    baseURL: 'http://18.180.221.171/api/v1',
  }),
  options
);

export default client;