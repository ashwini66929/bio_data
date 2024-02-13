import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Course.css';
import a1 from './a1.jpg';
const Internship = () =>{
    const items =
    {src:a1,
      courseOverview:"The Advanced Telecommunications Technology course is tailored for professionals and enthusiasts looking to delve into the latest innovations and technologies shaping the telecommunications landscape. Covering a wide spectrum of topics, this course equips participants with the skills and knowledge needed to navigate and contribute to the rapidly evolving world of telecommunications."
    }

    return (
    <div style={{paddingTop:'330px',paddingLeft:'12px'}}>
    <span><h3 style={{paddingLeft:'12px'}}>InternShip Certificate</h3></span>
    <hr />
    <div className="flex-wrap">


<Card style={{ width: '18rem'}}>
  <Card.Img variant="top" src={items.src} height={180} width={287}/>
  
  <Card.Body className="cards__overlay">
    <Card.Title>
        <h3>
        Advance telecom technolagy:
        </h3>
    </Card.Title>
    <Card.Text>
    <p >

      {items.courseOverview}
        </p>
    </Card.Text>
    {/*<Button variant="primary">Go somewhere</Button>*/}
  </Card.Body>
  
  

        </Card>
    </div>
</div>
            );
}
export default  Internship;