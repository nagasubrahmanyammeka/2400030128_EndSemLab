import React,{ useState } from 'react'

export default function App() {
  let courseList=['FEDF','DAV','OS','DBMS','AIML'];
  const [courses,setCourses]=useState(courseList);
  const achange=(value)=>
    {
      courseList.add(value);
      setCourses([...courseList]);
    }
  const replace=(pos,value)=>{
    courseList.replace(pos,value);
    setCourses([...courseList]);
  }
  const drop=(pos)=>{
    courseList.drop(pos);
    setCourses([...courseList]);
  }
  return (
    <div>
      <h2>Courses List: </h2>
     <li><ol> <p>{courseList}</p></ol></li>
      <form>
        <h4>Add a Subject: </h4>
        <input type="text" onChange={(e)=>achange(e.target.value)}/>
        <h4>Replace a Subject</h4>
        <input type="number"/>
        <input type="text"  onChange={(e)=>replace(pos,e.target.value)}/>
        <h4>Drop a Subject</h4>
        <input type="number" onChange={(e)=>drop(e.target.value)}/>
      </form>
      <h2>Updated Course List</h2>
      <h2>Final Course List: </h2>
      <p>{courseList}</p>
    </div>
  );

}

