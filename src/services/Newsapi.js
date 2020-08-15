import axios from 'axios';

const NewsAPI = axios.create({
  baseURL: `http://newsapi.org/v2/`,
});

NewsAPI.interceptors.request.use(async (config) => {
  try {
    const token = 'f19d8298028346eea21e57d16e383523';

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  } catch (err) {
    alert(err);
  }
});

export default NewsAPI;
