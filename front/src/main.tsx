import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'

import './index.css'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { LocationProvider } from './providers/LocationProvider.tsx'
import Navbar from './components/navbar.tsx'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <LocationProvider>
        <BrowserRouter>
          <Navbar />
          <App />
        </BrowserRouter>
      </LocationProvider>
    </QueryClientProvider>
  </StrictMode>
)
