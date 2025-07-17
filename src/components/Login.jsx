import React, { useState } from 'react'

const Login = () => {

  const [signInForm,setSignInForm] = useState(true);
  
  return (
    <>

        <div className="bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/a927b1ee-784d-494a-aa80-cf7a062d2523/web/IN-en-20250714-TRIFECTA-perspective_5acb7337-c372-45ec-ae12-ddb110e6ad78_large.jpg)] w-full h-screen flex justify-center items-center">
         <div className='w-full h-screen flex justify-center items-center bg-black/40'>
         
           <div className='flex justify-center items-center px-[64px] pt-[64px] pb-[120px] bg-black/80 rounded'>
             <div className='flex flex-col gap-4 w-[350px]'>
               <h1 className="flex w-full text-white text-[32px] tracking-tighter font-medium">{signInForm ? "Sign In" : "Sign Up"}</h1>
               <form className='flex flex-col gap-4'>

                <div className={`relative w-full ${signInForm ? "hidden": "block"}`}>
                  <input
                    type="text"
                    id="name"
                    required
                    className="peer w-full h-[52px] bg-stone-800/50  text-white px-[12px] pt-5 pb-2 rounded placeholder-transparent focus:outline-none focus:border-red-500"
                    placeholder="Full Name"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-300 font-thin text-sm transition-all duration-200 ease-in-out 
                    peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-300 
                    peer-focus:top-2 peer-focus:text-xs peer-focus:text-white 
                    peer-valid:top-2 peer-valid:text-xs peer-valid:text-white"
                  >
                    Full Name
                  </label>
                </div>

                <div className="relative w-full">
                  <input
                    type="text"
                    id="email"
                    required
                    className="peer w-full h-[52px] bg-stone-800/50  text-white px-[12px] pt-5 pb-2 rounded placeholder-transparent focus:outline-none focus:border-red-500"
                    placeholder="Email or mobile number"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-300 font-thin text-sm transition-all duration-200 ease-in-out 
                    peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-300 
                    peer-focus:top-2 peer-focus:text-xs peer-focus:text-white 
                    peer-valid:top-2 peer-valid:text-xs peer-valid:text-white"
                  >
                    Email or mobile number
                  </label>
                </div>

                 <div className='floating-label relative w-full h-[52px]'>
                     <input id='password' type='text' className='text-white peer absolute focus:outline focus:outline-red-500 focus:border-red-500 bg-stone-800/50 px-[12px] py-[8px] h-[52px] w-full border-slate-300/80 p-2 rounded placeholder-transparent' placeholder='Password'/>
                   <label htmlFor='password' className='peer-placeholder-shown:text-zinc-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:text-white  peer-focus:font-medium  peer-focus:text-xs peer-focus:top-2 peer-valid:top-2 peer-valid:text-xs peer-valid:text-white absolute top-[50%] left-[5%] -translate-y-[50%]  flex justify-start items-start text-[12px] font-thin text-zinc-300 transition-all ease-in-out duration-300'>Password
                   </label>
                 </div>

                 
                 
                 <button className='w-full bg-red-600 text-white font-medium tracking-tight text-[16px] rounded py-2 hover:bg-red-700 transition-all ease-in-out duration-300'>{signInForm ? "Sign In" : "Sign Up"}</button>
                </form>

                 <div className={`flex flex-col gap-4 ${signInForm ? "block": "hidden"}`}>
                   <h1 className='flex w-full justify-center text-stone-500 text-[18px] font-regular'>OR</h1>
                   <button className='w-full bg-white/20 text-white font-medium tracking-tight text-[16px] rounded py-2'>Use a Sign In Code</button>
                   <h1 className='flex justify-center w-full text-white text-[16px] font-thin underline'>Forgot Password?</h1>
                    <label className="text-white text-[16px] font-thin flex items-center gap-2">
                      <input type="checkbox" className="w-[16px] h-[16px]" />
                       Remember me
                    </label>
                 </div>

                    <h1 className='text-white/50 font-regular'>{signInForm ? "New to Netflix?" : "Already have an account?"}<button className='text-white font-medium' onClick={()=>setSignInForm(!signInForm)}>{signInForm ? "Sign up" : "Sign In"}</button></h1>
                    <h1 className='text-white/50 text-[12px] w-full font-regular'>This page is protected by google reCaptcha to ensure you are not a bot</h1>
                    <h1 className='text-[12px] text-blue-400 underline'>Learn more</h1>
              
                </div>
           </div>


         </div>

      </div>
      

    </>
  )
}

export default Login
