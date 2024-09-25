export default function CreateTask() {
  return (
    <div className="w-full">
      <div className="border border-gray-200 rounded-lg dark:border-gray-700">
        <input
          type="checkbox"
          id="accordion-checkbox"
          className="peer hidden"
        />
        <label
          htmlFor="accordion-checkbox"
          className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border-b border-gray-200 rounded-t-lg cursor-pointer"
        >
          <span>Create Task</span>
          <svg
            className="w-3 h-3 rotate-0 peer-checked:rotate-180 transition-transform"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </label>
        <div className="p-5 border-b border-gray-200 peer-checked:block hidden">
          <span className="w-full flex max-w-[800px] justify-between md:flex-nowrap flex-wrap">
            <div className="border w-full px-3 pb-6 pt-2">
              <label
                htmlFor="date"
                className="block text-md mb-4 font-medium text-gray-700"
              >
                Title
              </label>
              <input
                className="border-b-2 border-black w-full focus:outline-none"
                placeholder="Write here..."
              />
            </div>
            <div className="border w-full px-3 pb-6 pt-2">
              <label
                htmlFor="date"
                className="block text-md mb-4 font-medium text-gray-700"
              >
                Topic
              </label>
              <input
                className="border-b-2 border-black w-full focus:outline-none"
                placeholder="Write here..."
              />
            </div>
            <div className="border w-full px-3 pb-6 pt-2">
              <label
                htmlFor="priority"
                className="block text-md mb-4 font-medium text-gray-700"
              >
                Select Priority
              </label>
              <select
                id="priority"
                className=" text-gray-900 rounded-lg focus:ring-blue-500 focus:outline-none outline-none block w-full"
              >
                <option value="very-high">Very High</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>

            <div className="border w-full px-3 pb-6 pt-2">
              <label
                htmlFor="date"
                className="block text-md mb-4 font-medium text-gray-700"
              >
                Select a date
              </label>
              <input
                type="date"
                id="date"
                className="border hover:cursor-pointer  text-gray-900 focus:outline-none outline-none focus:ring-blue-500 block w-full"
              />
            </div>
            <div className="border w-full bg-green-300 hover:bg-green-500 hover:cursor-pointer">
              <button className="w-full h-full text-center">CREATE</button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}
