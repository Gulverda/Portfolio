import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { StarsCanvas } from '../src/components/main/startBg.jsx'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Analytics />
    <SpeedInsights />
    <StarsCanvas />
    <App />
  </React.StrictMode>
)
