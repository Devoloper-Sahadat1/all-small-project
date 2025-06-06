import React, { useEffect, useState } from 'react';
import Card from './card';
import { Link } from 'react-router-dom';

const Fetch = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(error=>console.log(error))
  },[])
  return (
    <div>
      <Link to="/loader" className='btn btn-primary text-center ml-[45%] mt-20 text-2xl'>let's learn about loader</Link>
      <h1 className='text-8xl text-center  text-emerald-900'>ussing pros , fetch and router sytem</h1>
      <div className="grid grid-cols-4 gap-4">
        {posts.map((post) => (
          <Card props={post} key={post.id}></Card>
          // <div>
          //   <h1>{post.name} </h1>
          // </div>
        ))}
        {/* <Card name="st"></Card> */}
      </div>
    </div>
  );
};

export default Fetch;