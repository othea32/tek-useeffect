import axios from 'axios';
import React, { useState, useEffect } from 'react'

function Advanced() {
 const [people, setPeople] = useState([]);
 const [currentIndex, setCurrentIndex] = useState(0);
 const [loading, setLoading] = useState(true);

 useEffect(() => {
   const fetchData = async () => {
     const result = await axios("https://jsonplaceholder.typicode.com/users");
     console.log(result.data);
     setPeople(result.data);
     setLoading(false);
   };

   fetchData();
 }, []);

 const handleNextPerson = () => {
   setCurrentIndex((prevIndex) => {
     return (prevIndex + 1) % people.length;
   });
 };

 const handlePrevPerson = () => {
   setCurrentIndex((prevIndex) => {
     return (prevIndex - 1 + people.length) % people.length;
   });
 };

 if (loading) {
   return <div>Loading...</div>;
 }

 return (
   <div>
     <div>
       <h2>{people[currentIndex].name}</h2>
       <h2>Email :{people[currentIndex].email}</h2>
       <p>Street: {people[currentIndex].address.street}</p>
       <p>suite: {people[currentIndex].address.suite}</p>
       <p>city: {people[currentIndex].address.city}</p>
     </div>

     <button onClick={handlePrevPerson}>prev</button>
     <button onClick={handleNextPerson}>Next</button>
   </div>
 );
}

export default Advanced