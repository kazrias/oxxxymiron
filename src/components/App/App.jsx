import { Header } from "../Header/Header"
import { Footer } from "../Footer/Footer"
import { AppRoutes } from './AppRoutes'
function App() {
  return (
    <div className="app">
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  )
}

export default App
