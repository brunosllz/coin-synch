import { env } from '@/env'
import axios from 'axios'

const coinCapApi = axios.create({
  baseURL: 'https://api.coincap.io/v2',
})

const api = axios.create({
  baseURL: env.NEXT_PUBLIC_VERCEL_URL,
})

export { coinCapApi, api }
