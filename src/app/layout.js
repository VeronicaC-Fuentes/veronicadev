// app/layout.js
import './globals.css'
import Sidebar from './components/Sidebar'

export const metadata = {
  title: 'Verónica Dev',
  description: 'Portafolio de Verónica Cruces',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />

      </head>
      <body className="flex overflow-x-hidden">
        <Sidebar />
        <main className="flex-1 min-h-screen lg:ml-64">       
           {children}
        </main>
      </body>
    </html>
  )
}
