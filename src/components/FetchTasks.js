import { useQueryTasks } from '../hooks/useQueryTasks'

export const FetchTasks = () => {
  const { data } = useQueryTasks()

  return (
    <div className="my-3 text-center">
      <p className="my-3 font-bold">Task List</p>
      {data?.map((task) => (
        <p className="my-3 text-sm" key={task.id}>
          {task.title}
        </p>
      ))}
    </div>
  )
}
