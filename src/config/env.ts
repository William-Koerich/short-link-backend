import { config } from 'dotenv'
import { resolve } from 'path'

config({ path: resolve(__dirname, '..', '..', '.env') })

export const { PORT = 7777, MONGO_URL = '' } = process.env
