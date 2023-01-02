
export default function Contact(props){
    return(
        <div >
           
        <div className={`flex flex-col w-screen items-center h-fit justify-center  space-y-6 `}>
           
            <div className="bg-hero w-fit">
            
            <div className="px-6 py-4 space-y-6 text-black">
            <h1 className="text-4xl font-semibold hover:underline cursor-pointer ">Get in Touch:</h1>
            <p className="md:px-12 sm:px-4ml-12 py-4 font-serif text-gray-800 ">Lorem ipsum dolor sit amet consectetur adipisicing. Dolores numquam laborum cum enim quibusdam quis laboriosam ipsa, in facilis reprehenderit.Deleniti? Vero sequi sapiente adipisci, magnam eius nemo? Dolorum modi deleniti quisquam. Quibusdam sequi doloribus in unde recusandae inventore, necessitatibus delectus cumque rerum.</p>
            </div>
            </div>
            
            <img className="w-40" src="/Images/contact.svg" alt="" />
            <section class={`${props.darkMode ? 'bg-dark text-white font-Sans' : 'text-gray-600 font-Sans bg-body'} relative pt-2 pb-4 bg-transparent overflow-hidden`}>
  <img class="absolute bottom-0 left-1/2 transform -translate-x-1/2" src="flaro-assets/images/contact/gradient.svg" alt=""/>
  <div class="relative z-10 container px-4 mx-auto ">
   
    <div class="flex flex-wrap -m-3">
      <div class="w-full md:w-1/3 p-3">
        <div class={`${props.darkMode ? 'bg-dark text-white font-Sans' : 'text-gray-600 font-Sans bg-white'} h-full text-center bg-opacity-90 border border-blueGray-100 rounded-xl p-2 shadow-11xl`}>
          <div class="mb-6 relative mx-auto w-16 h-16 bg-indigo-600 hover:bg-indigo-700 rounded-full ">
            <div class="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
              <a href="mailto:anujchhikara777@gmail.com">
              <svg width="32" height="33" viewbox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 11.1666L14.5208 18.1805C15.4165 18.7776 16.5835 18.7776 17.4792 18.1805L28 11.1666M6.66667 25.8333H25.3333C26.8061 25.8333 28 24.6394 28 23.1666V9.83329C28 8.36053 26.8061 7.16663 25.3333 7.16663H6.66667C5.19391 7.16663 4 8.36053 4 9.83329V23.1666C4 24.6394 5.19391 25.8333 6.66667 25.8333Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>

              </a>
             
            </div>
          </div>
          <h3 class="mb-3 text-xl font-bold font-heading leading-snug">Send Email</h3>
          <p class="font-medium leading-relaxed">info@mail.com</p>
          <p class="font-medium leading-relaxed">support@mail.com</p>
        </div>
      </div>
      <div class="w-full md:w-1/3 p-3">
        <div class={`${props.darkMode ? 'bg-dark text-white font-Sans' : 'text-gray-600 font-Sans bg-white'} p-2 h-full text-center  bg-opacity-90 border border-blueGray-100 rounded-xl shadow-11xl`}>
          <div class="mb-6 relative mx-auto w-16 h-16 bg-white hover:bg-zinc-400   border border-gray-400 rounded-full">
            <div class="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
              <svg width="32" height="33" viewbox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 7.16667C4 5.69391 5.19391 4.5 6.66667 4.5H11.039C11.6129 4.5 12.1224 4.86724 12.3039 5.4117L14.301 11.4029C14.5108 12.0324 14.2258 12.7204 13.6324 13.0172L10.6227 14.522C12.0923 17.7816 14.7184 20.4077 17.978 21.8773L19.4828 18.8676C19.7796 18.2742 20.4676 17.9892 21.0971 18.199L27.0883 20.1961C27.6328 20.3776 28 20.8871 28 21.461V25.8333C28 27.3061 26.8061 28.5 25.3333 28.5H24C12.9543 28.5 4 19.5457 4 8.5V7.16667Z" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </div>
          </div>
          <h3 class="mb-3 text-xl font-bold font-heading leading-snug">Call Us</h3>
          <p class="font-medium leading-relaxed">+1 8408 412 569</p>
          <p class="font-medium leading-relaxed">+1 8408 412 569</p>
        </div>
      </div>
      <div class="w-full md:w-1/3 p-3">
        <div class={`${props.darkMode ? 'bg-dark text-white font-Sans' : 'text-gray-600 font-Sans bg-white'} h-full text-center bg-opacity-90 border border-blueGray-100 p-2 rounded-xl shadow-11xl`}>
          <div class="mb-6 relative mx-auto w-16 h-16 border bg-white hover:bg-zinc-400  border-gray-400 rounded-full">
            <div class="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
              <a href="https://goo.gl/maps/zjoVDWSocb7GZF7TA">
              <svg width="32" height="33" viewbox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.5431 22.7091C22.1797 24.0725 19.192 27.0602 17.4133 28.8389C16.6323 29.62 15.3693 29.6203 14.5883 28.8392C12.8393 27.0903 9.91373 24.1647 8.45818 22.7091C4.29259 18.5435 4.29259 11.7898 8.45818 7.62419C12.6238 3.4586 19.3775 3.4586 23.5431 7.62419C27.7087 11.7898 27.7087 18.5435 23.5431 22.7091Z" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M20.0007 15.1667C20.0007 17.3758 18.2098 19.1667 16.0007 19.1667C13.7915 19.1667 12.0007 17.3758 12.0007 15.1667C12.0007 12.9575 13.7915 11.1667 16.0007 11.1667C18.2098 11.1667 20.0007 12.9575 20.0007 15.1667Z" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
              </a>
              
            </div>
          </div>
          <h3 class="mb-3 text-xl font-bold font-heading leading-snug">Address</h3>
          <p class="font-medium max-w-xs mx-auto leading-relaxed">380 St Kilda Road, Melbourne VIC 3004, Australia</p>
        </div>
      </div>
    </div>
  </div>
</section>
           
          
        </div>
        
      
        </div>
    )
}