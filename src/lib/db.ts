import mongoose from 'mongoose'

import { mongoAttributes } from '../config/db'

/**
 * Mongo connection.
 */
export const mongoConnect = () =>
  mongoose.connect(mongoAttributes.url, mongoAttributes.options)
