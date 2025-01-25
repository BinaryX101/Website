import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import BrowserRouter from 'react-router-dom/BrowserRouter'

ReactDOM.render((
   <BrowserRouter basename={process.env.PUBLIC_URL}>
     <App />
   </BrowserRouter>
), ...)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Website/",
  
})
