
import React from 'react';
import './Experience.css'; 

const Experience = () => {  
  return (
    <div className="experience">
      <h2>Experience</h2>
      <ul>
        <li>
          <h5>Meyer Distributing,(Hybrid Remote) Dallas, TX</h5>
          <ul className='experience-list'>
            <li>Automated eCommerce Marketplace payout to Microsoft 365 GP payout</li>
            <li>Develop and maintain backend systems. resolve critical technical issues via ticketing system.</li>
            <li>Create or Alter stored procedures, views, functions, etc. using MS SQL Server</li>
            <li>Daily use of source control and work-flow management through Gitlab, Git and Spiceworks.</li>
            <li>Work in an Agile team environment by attending daily stand ups and performing in depth code reviews.</li>
            <li>Maintain and build new features in a wide variety of code bases. Including .Net Framework, Webforms, .Net Core, MVC and  use a domain driven Clean architecture.</li>
            <li>Write quality reusable code in various frameworks and languages including HTML, CSS, JavaScript, and C#</li>
            <li>Create and run unit tests using NUnit reducing production errors.</li>
          </ul>
        </li>
        <li>
          <h5>World Print, Remote</h5>
          <ul className='experience-list'>
            <li>Content Management - Events, Venue and Location. Implemented sorting, filtering, role-based routing and mapping components for enhanced user experience.</li>
            <li>Build middle-tier intermediaries using .Net/C# to fulfill promised based RESTful application 
programming interface (API) requests from front-end applications to the database.
</li>
            <li>Conduct RESTful API testing on all endpoints for .NET Core API controllers.</li>
            <li>Architect and manage relational databases, UDTs, and stored procedures in Microsoft SQL Server.</li>
            <li>Collaborate with a team of developers using source control and Agile methodologies, including daily stand ups and code reviews.</li>
            <li>Integrate Formik React Component for form structure and input validation with YUP library.</li>
          </ul>
        </li>
        <li>
          <h5>US Air Force, Global</h5>
          <ul className='experience-list'>
            <li>Developed and executed airfield management strategies, supervised and trained personnel in launching and recovery of mission critical aircraft. Traveled internationally collaborating and learning from foreign agencies Gained valuable skills in attention to detail and work ethics. </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Experience;