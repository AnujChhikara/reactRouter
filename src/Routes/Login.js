import { useState } from "react"

export default function Login(props){
  const[username, setUsername] = useState("")
  const[password, setPassowrd] = useState("")


 
    return (
        
        <div className={` h-screen`} >
         
          <div className="flex justify-center items-center pb-24 pt-24">
            <div class="w-full max-w-xs">
  <form class={` shadow-xl border border-gray-300 rounded-2xl px-8 pt-6 pb-8 mb-4 ${props.darkMode ? ' bg-lDark text-white' : 'bg-white'}`}>
    <div class="mb-4">
      <label class="block text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input
      value={username}
      onChange={(e)=> setUsername(e.target.value)}
       class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
    </div>
    <div class="mb-6">
      <label class="block  text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input
      value={password}
      onChange={(e)=> setPassowrd(e.target.value)}
       class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
      <p class="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign In
      </button>
      <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="https://support.google.com/accounts/answer/41078?hl=en&co=GENIE.Platform%3DAndroid">
        Forgot Password?
      </a>
    </div>
  </form>
  <p class="text-center text-gray-500 text-xs">
    &copy;2022 Anuj Chhikara All rights reserved.
  </p>
  
</div>

</div>

        </div>
    )
}