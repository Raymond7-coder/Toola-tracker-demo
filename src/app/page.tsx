import LoginForm from "@/_components/forms/LoginForm";
import Image from "next/image";
import logo from "@/assets/images/logo.png"
import background from "@/assets/images/6148.jpg";
import dashboard from "@/assets/images/Dashboard.png";

export default function Home() {
  return (
    <div className="font-lato bg-gray-100 flex items-center  justify-center min-h-screen ">
      <div className="md:w-1/2 lg:w-2/5 px-5 py-10 2xl:pb-23">
          <div className="w-full sm:w-120 md:w-full rounded-md mx-auto sm:px-6 py-2 flex flex-col gap-y-5 items-center justify-center ">
            <Image
              src={logo}
              alt="Aos logo"
              className="h-20 md:h-25 lg:h-30 w-auto py-4 xsm:py-6"
            />
            <div className="flex flex-col gap-y-0.5 items-center text-center -mt-4">
              <h1 className="font-semibold text-lg xsm:text-xl">Welcome to TOOLA</h1>
              <p className="text-11 xsm:text-xs">Built solely for the purpose of tracking our tools and equipments</p>
            </div>
            <LoginForm/>
          </div>
          <p className="text-11 sm:text-xs font-medium text-gray-600 mt-6 mx-auto sm:max-w-150 text-center">By signing in, you confirm that you are a staff member of SAM and are 
        authorized by your department head to access this tool-tracking platform. </p>
      </div>
      <div className="relative h-screen hidden md:flex w-1/2 lg:w-3/5 ">
        <Image
          src={background}
          alt="Background image h-screen object-cover"
        />
        <div className="bg-green-800/85 absolute top-0 bottom-0 w-full h-full flex flex-col gap-y-5 lg:gap-y-10 items-start justify-center px-8 lg:px-20">
          <div className="flex flex-col gap-y-1 text-white">
            <h1 className="font-semibold text-lg md:text-lg lg:text-2xl 2xl:text-3xl">Effortlessly Track Tools using TOOLA</h1>
            <p className="text-xs 2xl:text-sm text-gray-300">Log In to access your dashboard and manage your department tools</p>
          </div>
          <Image
            src={dashboard}
            alt="Background image h-screen object-cover"
          />
        </div>
      </div>
    </div>
  );
}
