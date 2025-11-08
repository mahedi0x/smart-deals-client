import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';

const Register = () => {

    const { signInWithGoogle } = use(AuthContext);

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                const newUser = {
                    name: result.user.displayName,
                    email: result.user.email,
                    image: result.user.photoURL
                }

                // create user in the database
                fetch('http://localhost:3000/users',{
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('data after user save', data)
                    })

            })
            .catch(error => {
                console.log(error)
            })
    }






    return (
        <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4">
            
            <div className="w-full max-w-sm sm:max-w-md bg-white p-8 md:p-10 rounded-2xl shadow-xl transition-all duration-300 transform hover:shadow-3xl">


            <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold text-gray-900 mb-1">Register Now!</h1>
            <p className="text-sm text-gray-500">Already have an account? 
                <Link to="/login" className="font-semibold text-purple-600 hover:text-purple-700 transition duration-150"> Login Now</Link>
            </p>
           </div>

            <form >
            <div className="mb-5">
                <label for="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input type="text" id="name" name="name" placeholder="mahedi hasan" required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 transition duration-150 text-gray-900"/>
            </div>

       
            <div className="mb-5">
                <label for="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" id="email" name="email" placeholder="example@gmail.com" required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 transition duration-150 text-gray-900"/>
            </div>

       
            <div className="mb-5">
                <label for="image-url" className="block text-sm font-medium text-gray-700 mb-1">Image-URL</label>
                <input type="url" id="image-url" name="image-url" placeholder="Optional profile image link" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 transition duration-150 text-gray-900"/>
            </div>

           
            <div className="mb-6">
                <label for="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input type="password" id="password" name="password" placeholder="************" required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 transition duration-150 text-gray-900"/>
            </div>

 
            <div>
                <button type="submit" className="w-full cursor-pointer flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-lg text-lg font-semibold text-white  bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-200 transform hover:scale-[1.01] active:scale-[0.99]">
                    Register
                </button>
            </div>

            {/* Google */}
        </form>

           <div className="">
           <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5] w-full my-5 py-6">
            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
            Login with Google
            </button>
           </div>


        </div>
        </div>

    );
};

export default Register;