import React from 'react'
import Tree from 'react-animated-tree'
//import './styles.css'

const treeStyles = {
  //position: 'relative',
  //top: 40,
  //left: 40,
  color: 'white',
  fill: 'white',
  width: '100%'
}

const typeStyles = {
  fontSize: '2em',
  verticalAlign: 'middle'
}

const Education = () => (
    <div>
  <Tree content="Education"   open style={treeStyles}>
    <Tree content="University of Liverpool" type={<span style={typeStyles}></span>}  >
        <Tree content="MSc. Information Systems Management" style={{ color: 'white', align : 'justify'}} />
        </Tree>
    <Tree content="University of Nigeria, Nsukka" type={<span style={typeStyles}></span>}  >
        <Tree content="Bachelors in Electronic Engineering" style={{ color: 'white', align : 'justify'}} />
        </Tree>
   

    </Tree>
  </div>
)

export default Education;