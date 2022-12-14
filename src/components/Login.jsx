import Dashboard from "./Dashboard";
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import {useNavigate} from "react-router-dom";


export default function Login() {
    const navigate = useNavigate();

    const handleForm = () => {
        navigate("/dashboard");
    }

    return (
        <>
            <main className={"relative flex justify-center"}>

                <div className={"w-full max-h-[100%]"}>
                    <img src={img4} alt="" className={"opacity-70 h-screen w-screen object-cover"} />
                </div>

                <div className="flex w-[80%] py-28 absolute top-0  z-100" >

                    <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 shadow-2xl rounded-l-2xl bg-white">
                        <div className="mx-auto w-full max-w-sm lg:w-96 bg-white">
                            <div>

                                <h2 className="mt-6 text-3xl tracking-tight font-bold text-gray-900">Sign in to your account</h2>

                            </div>

                            <div className="mt-8">


                                <div className="mt-6">
                                    <form onSubmit={handleForm}  className="space-y-6">
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                                Email address
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    autoComplete="email"
                                                    required
                                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-1">
                                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                                Password
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    id="password"
                                                    name="password"
                                                    type="password"
                                                    autoComplete="current-password"
                                                    required
                                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                />
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <input
                                                    id="remember-me"
                                                    name="remember-me"
                                                    type="checkbox"
                                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                                />
                                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                                    Remember me
                                                </label>
                                            </div>

                                            <div className="text-sm">
                                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                    Forgot your password?
                                                </a>
                                            </div>
                                        </div>

                                        <div>
                                            <button
                                                type="submit"
                                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"

                                                onClick={handleForm}
                                            >
                                                Sign in
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:block relative w-0 flex-1">
                        <img
                            className="absolute inset-0 h-full w-full object-cover rounded-r-2xl"
                            src={img3}
                            alt=""
                        />
                    </div>
                </div>
            </main>

        </>
    )
}
