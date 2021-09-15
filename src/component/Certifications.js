import React from 'react';
import Tree from 'react-animated-tree';
//import './styles.css'

const treeStyles = {
	//position: 'relative',
	//top: 40,
	//left: 40,
	color: 'white',
	fill: 'white',
	width: '100%',
};

const typeStyles = {
	fontSize: '2em',
	verticalAlign: 'middle',
};

const Certification = () => (
	<div>
		<Tree content="Certifications" open style={treeStyles}>
			<Tree content="AWS Certified Solutions Architect - Associate" type={<span style={typeStyles}></span>}>
				<Tree content="January 2021" style={{ color: 'white', align: 'justify' }} />
			</Tree>
			<Tree content="AWS Certified Developer - Associate" type={<span style={typeStyles}></span>}>
				<Tree content="March 2021" style={{ color: 'white', align: 'justify' }} />
			</Tree>
      <Tree content="AWS Certified SysOps Administrator – Associate" type={<span style={typeStyles}></span>}>
				<Tree content="May 2021" style={{ color: 'white', align: 'justify' }} />
			</Tree>
		</Tree>
	</div>
);

export default Certification;
