import Course from "./Course";
import Internship from "./Internship";
import Rating from "./Rating";
import Hobbie from "./Hobbie";
import PersonalDetail from "./PersonalDetail";
const ListCourse = () =>{
    return (<>
    <Rating/>
    <span><h3 style={{paddingLeft:'12px'}}>Course Certificate</h3></span>
    <hr />
                <Course />
            
                <Internship/>
                <Hobbie/>
                
                <PersonalDetail/>
                </>
            );
}
export default  ListCourse;