export default function Footer(){
    return (
        <div>
            <hr className="bg-gray-500 h-0.5"/>
            <div className="p-4 flex flex-col items-center space-y-2 bg-body ">
               <div className="flex px-4 space-x-4 items-center justify-center">
                <a href="https://github.com/AnujChhikara"><img src="/icons/github.png" className="w-7 hover:animate-pulse" alt="" /></a>
                <a href="https://twitter.com/AnujChhikara07"><img src="/icons/twitter.png" className="w-7 hover:animate-pulse" alt="" /></a>
                <a href="https://www.instagram.com/"><img src="/icons/instagram.png" className="w-7 hover:animate-pulse" alt="" /></a>
                <a href="mailto:anujchhikara777@gmail.com"><img src="/icons/email.png" className="w-7 hover:animate-pulse" alt="" /></a>
                <a href="https://www.linkedin.com/in/anuj-chhikara-webdeveloper/"><img src="/icons/linkedin.png" className="hover:animate-pulse w-7" alt="" /></a>
               </div>
               <div className="flex space-x-3 text-lg" >
               <a href="https://reactjs.org/" className="hover:underline"><h3>React</h3></a>
               <a href="https://tailwindcss.com/" className="hover:underline"><h3>Tailwind</h3></a>
               </div>
               <div>
                <h2 className="font-nunito mt-2"> &#169; 2022 Anuj Chhikara </h2>
               </div>
            </div>
        </div>

)}

