
import Campground from "../Campground"


export default function Campgrounds(props){
    
    

    return(
        <div className="">
     
           <div className="flex flex-col items-center">

            <Campground img="https://images.unsplash.com/photo-1533575770077-052fa2c609fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGdyb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
        
            <Campground img="https://images.unsplash.com/photo-1496947850313-7743325fa58c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGNhbXBncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>       
            <Campground img="https://images.unsplash.com/photo-1483381719261-6620dfa2d28a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
            </div>
        </div>
        
    )
}