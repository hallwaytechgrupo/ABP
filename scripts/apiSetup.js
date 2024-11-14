// const PORT = 1239;
const DOMAIN = 'abp-2024-2-server.onrender.com';
let PORT;

const api = axios.create({
  baseURL: PORT ? `https://${DOMAIN}:${PORT}` : `https://${DOMAIN}`,
});

export { api };
