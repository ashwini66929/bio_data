import logo from './a.jpg';
import a from './a.svg'
import './Info.css';
const Info =() =>{
    return(
        <>
        <header >
    <span>
    <div className='navbar' style={{WebkitBorderBottomLeftRadius:'30%'}}>
        <span style={{float:'right'}}><img src={logo} hight="270" width="140"/></span>
        <ul  style={{listStyleType:'none'}}>
        
        <li>Ashwini Ranjan Singh</li>
        <li>E-mail:-ashwiniranjansingh@gmail.com</li>
        <li>phone no:-+91 8709301450</li>
        <li><a href="cv.pdf"download={'cv.pdf'} >resuma</a></li>
    
    <br/>
    

       
        </ul>
        </div>
        <h3 style={{paddingTop:'200px',paddingLeft:'12px'}}>Education</h3>
        <hr/>
        </span>
        
    
        
   </header>
   <subheader>
   
        <ul style={{listStyleType:'none'}}>
        
        <li> Bachelor of Technology (Computer Science and Information Technology) | Bhubaneswar | Odisha <span style={{float:'right'}}><b>2024&nbsp; </b></span></li>
        <li>12th Science | hiruvananthapuram | Kerala | 71% aggregate<span style={{float:'right'}}><b>2020&nbsp; </b></span></li>
        <li>10th Bihar Board | Patna | Bihar | 60% aggregate <span style={{float:'right'}}><b>2018&nbsp; </b></span> </li>
    
    </ul>

   </subheader>
   </>
    );
}
export default Info;