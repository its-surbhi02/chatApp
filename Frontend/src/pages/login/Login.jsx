import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};

	return (
		<div className="flex items-center justify-center min-h-screen px-4">
			<div className="w-full max-w-md p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
				<h1 className="text-3xl font-semibold text-center text-gray-300 mb-4">
					Login<span className="text-blue-500"> ChatApp</span>
				</h1>

				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label className="label">
							<span className="text-base label-text text-white">Username</span>
						</label>
						<input
							type="text"
							placeholder="Enter username"
							className="w-full input input-bordered h-10"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>

					<div className="mb-2">
						<label className="label">
							<span className="text-base label-text text-white">Password</span>
						</label>
						<input
							type="password"
							placeholder="Enter Password"
							className="w-full input input-bordered h-10"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>

					<Link
						to="/signup"
						className="text-sm text-white hover:underline hover:text-blue-600 inline-block mt-1 mb-3"
					>
						Don't have an account?
					</Link>

					<button
						type="submit"
						className="btn btn-block btn-sm"
						disabled={loading}
					>
						{loading ? (
							<span className="loading loading-spinner" />
						) : (
							"Login"
						)}
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;


// STARTER CODE FOR THIS FILE
// const Login = () => {
//     return (
//       <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//           <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//               <h1 className='text-3xl font-semibold text-center text-gray-300'>
//               Login
//               <span className='text-blue-500'> ChatApp</span>
//               </h1>
  
//               <form>
//                       <div>
//                           <label className='label p-2'>
//                               <span className='text-base label-text'>Username</span>
//                           </label>
//                           <input
//                               type='text'
//                               placeholder='Enter username'
//                               className='w-full input input-bordered h-10'
//                           />
//                       </div>
//                       <div>
//                           <label className='lable'>
//                               <span className='text-base label-text'>Password</span>
//                           </label>
//                           <input
//                           type='text'
//                           placeholder='Enter Password'
//                           className='w-full input input-bordered h-10'
//                           />
//                       </div>
//                       <a href="#" className='text-sm  hover:underline hover:text-blue-600 mt-2 inline-block'>{"Don't"} have an account?</a>
//                       <button className='btn btn-block btn-sm mt-2'>
//                           Login
//                       </button>
//               </form>
//           </div>
//       </div>
//     )
//   }