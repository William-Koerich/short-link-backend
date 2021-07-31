import './config-aliases'
import { server } from './server'
import { PORT } from './config/env'

const onRunApp = () =>
  console.log(`🚀 Server ready at http://localhost:${PORT}`)

/**
 * Run server.
 */
const run = () => {
  const app = server()

  /**
   * Running server.
   */
  try {
    app.listen(PORT, onRunApp)
  } catch {
    console.log('Error while trying to start server')
  }
}

run()
