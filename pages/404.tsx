import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

const NotFound: NextPage = () => {
  const router = useRouter();
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center space-y-5">
      <h1 className="text-6xl text-first font-bold font-LexendMega">
        404 - Page not found
      </h1>
      <p className="font-LexendDeca">
        The URL of this page is not found. Please try again.
      </p>
      <div>
        <Link href=".">
          <div className="btn mr-4 bg-black text-white">Go to homepage</div>
        </Link>
        <div className="btn" onClick={() => router.back()}>
          Go back to previous page
        </div>
      </div>
    </div>
  );
};

export default NotFound;
