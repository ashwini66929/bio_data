import a1 from './a1.jpg';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Course.css';
const Course =()=>{
 const items ={
    c:{src:a1,
      courseOverview:"This C Programming Course is designed to provide participants with a comprehensive understanding of the C programming language. Whether you are a beginner looking to start your journey in programming or an experienced developer aiming to enhance your skills, this course caters to all levels of expertise."
    },
    cpp:{src:a1,
      courseOverview:"This Object-Oriented Programming using C++ course is designed to provide participants with a comprehensive understanding of OOP principles and how they are implemented in the C++ programming language. Whether you're a beginner looking to grasp the fundamentals or an intermediate developer aiming to deepen your knowledge, this course is tailored to suit various skill levels."
    },
    algo:{src:a1,
      courseOverview:"The Algorithmic Toolbox course is designed to equip participants with a solid foundation in algorithmic problem-solving. Whether you are a beginner venturing into the world of algorithms or an experienced developer seeking to enhance your algorithmic skills, this course is tailored to suit a diverse range of backgrounds."
    },
    ds:{src:a1,
      courseOverview:"Workshop designed for beginners and enthusiasts eager to dive into the exciting world of data analysis and machine learning. Led by experienced data scientists, this workshop will equip you with the fundamental skills and knowledge needed to extract meaningful insights from data and build predictive models."
    }
  }
    
 
  return (
    
    <div className="flex-wrap" Style={{paddingLeft:'12px'}}>


    <Card style={{ width: '18rem',paddingLeft:'12px'}}>
      <Card.Img variant="top" src={items.c.src} height={180} width={287}/>
      
      <Card.Body className="cards__overlay">
        <Card.Title>
            <h3>
            C programming:
            </h3>
        </Card.Title>
        <Card.Text>
        <p >

          {items.c.courseOverview}
            </p>
        </Card.Text>
       {/*<Button variant="primary">Go somewhere</Button>*/}
      </Card.Body>
      
      

    </Card>

    <Card style={{ width: '18rem',paddingLeft:'12px'}}>
      <Card.Img variant="top" src={items.cpp.src} height={180} width={287}/>
      
      <Card.Body className="cards__overlay">
        <Card.Title>
            <h3>
            OOP IN C++:
            </h3>
        </Card.Title>
        <Card.Text>
        <p >

          {items.cpp.courseOverview}
            </p>
        </Card.Text>
        {/*<Button variant="primary">Go somewhere</Button>*/}
      </Card.Body>
      
      

    </Card>




    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={items.algo.src} height={180} width={287}/>
      
      <Card.Body className="cards__overlay">
        <Card.Title>
            <h3>
            ALGORITHMIC TOOLBOX:
            </h3>
        </Card.Title>
        <Card.Text>
        <p >

          {items.algo.courseOverview}
            </p>
        </Card.Text>
        {/*<Button variant="primary">Go somewhere</Button>*/}
      </Card.Body>
      
    </Card>
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={items.ds.src} height={180} width={287}/>
      
      <Card.Body className="cards__overlay">
        <Card.Title>
            <h3>
            DATA ANALYTICS:
            </h3>
        </Card.Title>
        <Card.Text>
        <p >

          {items.ds.courseOverview}
            </p>
        </Card.Text>
        {/*<Button variant="primary">Go somewhere</Button>*/}
      </Card.Body>
      
    </Card>
    </div>
    
  );
}


export default Course;