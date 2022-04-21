import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { ExclamationCircleIcon } from '@heroicons/react/solid'
import { Layout } from './Layout'
import { Spinner } from './Spinner'
import { FetchComments } from './FetchComments'
import { FetchTasks } from './FetchTasks'
import { FetchUsers } from './FetchUsers'

export const SuspenseDemo = () => {
  return (
    <Layout>
      <p className="mb-3 text-xl font-bold text-blue-500">Suspense Demo</p>
      {/* <ErrorBoundary
        fallback={
          <ExclamationCircleIcon className="my-5 h-10 w-10 text-pink-500" />
        }
      >
        <Suspense fallback={<Spinner />}>
          <FetchUsers />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary
        fallback={
          <ExclamationCircleIcon className="my-5 h-10 w-10 text-pink-500" />
        }
      >
        <Suspense fallback={<Spinner />}>
          <FetchTasks />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary
        fallback={
          <ExclamationCircleIcon className="my-5 h-10 w-10 text-pink-500" />
        }
      >
        <Suspense fallback={<Spinner />}>
          <FetchComments />
        </Suspense>
      </ErrorBoundary> */}
      <ErrorBoundary
        fallback={
          <ExclamationCircleIcon className="my-5 h-10 w-10 text-pink-500" />
        }
      >
        <Suspense fallback={<Spinner />}>
          <FetchUsers />
          <FetchTasks />
          <FetchComments />
        </Suspense>
      </ErrorBoundary>
    </Layout>
  )
}
