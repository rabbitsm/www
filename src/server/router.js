import HomeRouter from './routes/home'

export function Router(server) {
  server.get('/', HomeRouter)
}