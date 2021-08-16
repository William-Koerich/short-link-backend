import { Link } from '../../src/models/link'
import {
  clearDatabase,
  closeDatabase,
  connectDatabase
} from '../helpers/server'

describe('[INTEGRAÇÃO] Busca de url', () => {
  /**
   * Connect to a new in-memory database before running any tests.
   */
  beforeAll(connectDatabase)

  /**
   * Clear all test data after every test.
   */
  afterEach(clearDatabase)

  /**
   * Remove and close the db and server.
   */
  afterAll(closeDatabase)

  test('Deve retornar a url vinculada ao hash', async () => {
    /**
     * Create data.
     */
    const data = {
      link: 'https://teste.com.br',
      shortLink: 'fG7DX6'
    }

    await Link.create(data)

    /**
     * Find url.
     */
    const foundUrl = await Link.findOne({ shortLink: data.shortLink }).lean()

    /**
     * Expect.
     */
    expect(foundUrl).toMatchObject({
      link: data.link,
      shortLink: data.shortLink
    })
  })
})
