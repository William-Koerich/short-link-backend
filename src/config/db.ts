import { MONGO_URL } from './env'

export const mongoAttributes = {
  url: MONGO_URL,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
}
