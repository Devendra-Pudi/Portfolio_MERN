import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { Toaster } from 'react-hot-toast'
import './index.css'
import App from './App.jsx'

// Error Fallback Component
const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
    <div className="max-w-md w-full text-center">
      <h2 className="text-3xl font-bold text-red-600 mb-4">Oops! Something went wrong</h2>
      <pre className="text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4 overflow-auto">
        {error.message}
      </pre>
      <button
        onClick={resetErrorBoundary}
        className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
      >
        Try again
      </button>
    </div>
  </div>
)

// Create Query Client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000,
    },
  },
})

// Loading Fallback
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
    <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
)

// Root Component
const Root = () => (
  <StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // Reset the state of your app here
        window.location.reload()
      }}
    >
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<LoadingFallback />}>
    <App />
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 5000,
              style: {
                background: '#333',
                color: '#fff',
              },
              success: {
                duration: 3000,
                theme: {
                  primary: '#4aed88',
                },
              },
              error: {
                duration: 4000,
                theme: {
                  primary: '#ff4b4b',
                },
              },
            }}
          />
        </Suspense>

      </QueryClientProvider>
    </ErrorBoundary>
  </StrictMode>
)

// Performance monitoring
if (process.env.NODE_ENV === 'production') {
  try {
    const { onCLS, onFID, onLCP } = await import('web-vitals')
    onCLS(console.log)
    onFID(console.log)
    onLCP(console.log)
  } catch (err) {
    console.error('Error loading web-vitals:', err)
  }
}

// Mount the app
const container = document.getElementById('root')
if (container) {
  const root = createRoot(container)
  root.render(<Root />)
} else {
  console.error('Failed to find root element')
}
