import React, {useState} from 'react';
import {  Tabs, Tab} from 'react-bootstrap';

import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
function Content(props) {
    const [key, setKey] = useState('about');
    
    return (
      <>
      
        
        <div className="alert ">
        
        
   
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          
        >
   
          <Tab eventKey="about" title="About Me"  className="alert p-0 mt-2">
            <About/>
          </Tab>
          <Tab eventKey="portfolio" title="Portfolio" className="alert p-0 mt-2">
            <Portfolio/>
          </Tab>
          <Tab eventKey="contact" title="Contact Me" className="alert p-0 mt-2 ">
            <Contact/>
          </Tab>
       
        </Tabs>
   
    </div>
        
</>
    );
}

export default Content;