import { useState } from 'react'
import axios from 'axios'
import { flushSync } from 'react-dom'
import { Layout } from './Layout'

export const AutoBatch = () => {
  const [count, setCount] = useState(0)
  const [fetchCount, setFetchCount] = useState(0)
  const [users, setUsers] = useState([])
  const clickHandler = () => {
    // setCount((count) => count + 1)
    // setFetchCount((fetchCount) => fetchCount + 1)
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      // flushSync(() => {
      //   setUsers(res.data)
      // })
      // flushSync(() => {
      //   setFetchCount((count) => count + 1)
      // })
      setUsers(res.data)
      setFetchCount((fetchCount) => fetchCount + 1)
    })
  }
  console.log('Rendered AutoBach')
  return (
    <Layout>
      <p className="my-3 text-xl font-bold text-blue-500">Automatic batching</p>
      <p className="my-5">{fetchCount}</p>
      <button
        className="my-5 rounded bg-indigo-600 px-3 py-1 text-white hover:bg-indigo-500"
        onClick={clickHandler}
      >
        click
      </button>
    </Layout>
  )
}
