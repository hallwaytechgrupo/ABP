// const PORT = 1239;
const DOMAIN = 'sea-lion-app-ctbf8.ondigitalocean.app';
let PORT;

const api = axios.create({
  baseURL: PORT ? `https://${DOMAIN}:${PORT}` : `https://${DOMAIN}`,
});

export { api };
