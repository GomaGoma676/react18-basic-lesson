import { useQueryUsers } from '../hooks/useQueryUsers'

export const FetchUsers = () => {
  const { data } = useQueryUsers()
  //   if (status === 'loading') return <p>Loading...</p>
  //   if (status === 'error') return <p>Error</p>
  return (
    <div className="my-3 text-center">
      <p className="my-3 font-bold">User List</p>
      {data?.map((user) => (
        <p className="my-3 text-sm" key={user.id}>
          {user.username}
        </p>
      ))}
    </div>
  )
}
