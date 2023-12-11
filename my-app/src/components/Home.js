import React, { useState, useEffect } from 'react';
import db from '../db.json';
import "../styles/Home.css";
const Home = () => {
  const [dbItem, dbItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/dbItem'); 
        const data = await response.json();
        dbItem(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div className='home__container'>
      <div className='db-list'>
       {
        dbItems && db.map((dbItem, index) => (
          <div key={dbItem.id} className={index % 2 === 0 ? 'horizontal-box' : 'vertical-box'}>
            <strong>{dbItem.brand}</strong><br></br>
            
            <img className="item-image"src={dbItem.image} alt={dbItem.name} />
            <div className='item-details'>
            {dbItem.name}<br></br>
            {dbItem.price}
            {dbItem.description}
            {dbItem.category}
            {dbItem.rating}
            {dbItem.product_type}
            </div>
            {/* {dbItem.product_colors && dbItem.product_colors.map(data => (
              <div key={data.hex_value}>
                {data.hex_value}
                {data.colour_name}
              </div> */}
            {/* ))} */}
          </div>
        ))
      }
      </div>
    </div>
  );
};

export default Home;
