import CreateTask from "./CreateTask";
import TaskList from "./TaskList";
export default function MainDisplay() {
  return (
    <section className="min-h-[90vh] max-w-screen-lg mx-auto mt-8 shadow-lg rounded-xl">
      <CreateTask />
      <TaskList />
    </section>
  );
}
