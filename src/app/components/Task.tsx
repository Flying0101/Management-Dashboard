export default function Task() {
  return (
    <div className="py-3 px-7 justify-between bg-gray-50 flex relative">
      <p className="flex-1 basis-1/4">Fix new server</p>
      <p className="flex-1 basis-1/4">High</p>
      <p className="flex-1 basis-1/4">IT</p>
      <p className="flex-1 basis-1/4">2024</p>
      <p className="absolute right-8 font-semibold hover:text-red-700 hover:cursor-pointer">
        X
      </p>
    </div>
  );
}
