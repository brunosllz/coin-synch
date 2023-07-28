import axios from 'axios'

const coinCapApi = axios.create({
  baseURL: 'https://api.coincap.io/v2',
})

const api = axios.create({
  baseURL: '/api',
})

export { coinCapApi, api }
