import Task from "./Task";

export default function TaskList() {
  return (
    <div className="w-full">
      <div className="flex py-5 px-7 border-b-2 border-black">
        <p className="text-lg basis-1/4 font-semibold">Title</p>
        <p className="text-lg basis-1/4 font-semibold">status</p>
        <p className="text-lg basis-1/4 font-semibold">topic</p>
        <p className="text-lg basis-1/4 font-semibold">year</p>
      </div>

      <Task />
    </div>
  );
}
