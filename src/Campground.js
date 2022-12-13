
 
export default function Campground(props){

  
    return(
        
        <div className={`flex flex-col  items-center  `}>
            <div className="md:flex md:flex-row  flex-col p-3 py-4 sm:flex sm:flex-col sm:items-center ">
                <img className="w-72  border rounded-xl shadow-md " src={props.img} alt="" />
            <p className="md:p-2 md:px-2 sm:py-2 sm:w-72 md:w-auto font-normal text-base ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non eum consectetur molestias aspernatur architecto sapiente possimus eius accusantium, modi error illum adipisci! Noloribus laudantium velit?</p>
            </div>
           
                 
        </div>
        
    )
}