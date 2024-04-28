import Link from "next/link";
const NotFound = () => {
  return (
    <div className="bg-gray-700 h-[90vh] flex justify-center items-center flex-col gap-5">
      <h1 className="text-2xl font-bold">Not-found</h1>
      <h6>Sorry the page you are looking for does not exist</h6>
      <Link href="/" className="border-b-2 border-gray-400">
        Back To Home
      </Link>
    </div>
  );
};

export default NotFound;
