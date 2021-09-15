import React from "react";
import Tree from "react-animated-tree";
//import './styles.css'

const treeStyles = {
  //position: 'relative',
  //top: 40,
  //left: 40,
  color: "white",
  fill: "white",
  width: "100%",
};

const typeStyles = {
  fontSize: "2em",
  verticalAlign: "middle",
};

const Skills = () => (
  <div>
    
    <Tree content="Technical Skills" open style={treeStyles}>
    <Tree content="DevOps" type={<span style={typeStyles}></span>}>
      <Tree content="GIT" style={{ color: "white", align: "justify" }} />
      <Tree content="Buddy" style={{ color: "white", align: "justify" }} />
      <Tree content="Jenkins" style={{ color: "white", align: "justify" }} />
      <Tree content="Docker" style={{ color: "white" }} />
      <Tree content="Kubernetes" style={{ color: "white" }} />
      <Tree content="Heroku" style={{ color: "white" }} />
      <Tree content="Netlify" style={{ color: "white" }} />
      <Tree content="Apache" style={{ color: "white" }} />
      <Tree content="Nginx" style={{ color: "white" }} />
      <Tree content="DNS, SSL" style={{ color: "white" }} />
      <Tree content="Google Cloud Computing" style={{ color: "white" }} />
      <Tree content="AWS" style={{ color: "white" }} />
      <Tree content="Terraform" style={{ color: "white" }} />
      <Tree content="Ansible" style={{ color: "white" }} />
    </Tree>
      <Tree content="Frontend" type={<span style={typeStyles}></span>}>
        <Tree content="HTML" style={{ color: "white", align: "justify" }} />
        <Tree content="CSS" style={{ color: "white" }} />
        <Tree content="Javascript" style={{ color: "white" }} />
        <Tree content="React" style={{ color: "white" }} />
        <Tree content="Bootstrap" style={{ color: "white" }} />
        <Tree content="Gatsby" style={{ color: "white" }} />
      </Tree>
      <Tree content="Backend" type={<span style={typeStyles}></span>}>
        <Tree content="NodeJs" style={{ color: "white", align: "justify" }} />
        <Tree content="MongoDB" style={{ color: "white" }} />
        <Tree content="DynamoDB" style={{ color: "white" }} />
        <Tree content="MySQL" style={{ color: "white" }} />
        <Tree content="MSSQL" style={{ color: "white" }} />
        <Tree content="REST API" style={{ color: "white" }} />
      </Tree>

      <Tree content="Others" type={<span style={typeStyles}></span>}>
        <Tree
          content="Data Analysis - Tableau , Metabase "
          style={{ color: "white", align: "justify" }}
        />
        <Tree
          content="Helpdesk - Zoho Desk, JIRA "
          style={{ color: "white" }}
        />
        <Tree
          content="Document Mangement - Alfresco "
          style={{ color: "white" }}
        />
        <Tree content="ERP - erpnext " style={{ color: "white" }} />
      </Tree>
    </Tree>
  </div>
);

export default Skills;
