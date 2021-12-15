import Task from './Task';

const Tasks = ({ tasks, setTasks, onDelete}) => {

    return (
        <>
            {tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={onDelete} />
            ))}
        </>
    )
}

export default Tasks
