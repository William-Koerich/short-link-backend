import request from 'supertest'
import { Server } from 'http'

import mongoose from 'mongoose'
import { MongoMemoryServer } from 'mongodb-memory-server'

import { server as httpServer } from '~/server'

const createdDatabase = MongoMemoryServer.create()

/**
 * Environment variables.
 */
const PORT = 3000
export let server: Server

/**
 * Connect to the in-memory database.
 */
export const connectDatabase = async () => {
  const mongod = (await createdDatabase).getUri()

  const mongooseOpts = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
  await mongoose.connect(mongod, mongooseOpts)

  /**
   * Start server.
   */
  const app = httpServer()
  server = app.listen(PORT)
}

/**
 * Drop database, close the connection and stop mongod.
 */
export const closeDatabase = async () => {
  await mongoose.connection.dropDatabase()
  await mongoose.connection.close()
  await (await createdDatabase).stop()

  server.close()
}

/**
 * Remove all the data for all db collections.
 */
export const clearDatabase = async () => {
  const collections = mongoose.connection.collections

  for (const key in collections) {
    const collection = collections[key]
    await collection.deleteMany({})
  }
}

/**
 * Send generic request.
 */
export const sendRequest = (
  method: 'post' | 'get' | 'delete' | 'put',
  route: string,
  data?: Object
) => {
  return request(server)[method](route).send(data)
}

jest.setTimeout(30000)
