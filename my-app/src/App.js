// import './App.css';

// import db from './db.json';
// function App() {
//   return (
//     <div className="App">
//       Rare Beauty
//       <br></br>

//       {
//         db.map(db => {
//           return(
//           <div className = "box" key = {db.id}>
//             <strong>{db.brand}</strong><br></br>
//             {db.name }
//             {db.price }
//             {db.image }
//             {db.description }
//             {db.category }
//             {db.rating}
//             {db.product_type}
            
//             {db.product_colors.map(data => {
//               return(
//                 <div key ={ db.id}>
//                   {data.hex_value}
//                   {data.colour_name}

//                 </div>
//               )
//             })}

//           </div>
//           )
//         })
//       }
//     </div>
//   );
// }
// console.log(db)
// export default App;
import React from 'react';
import './App.css';
import db from './db.json';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      Rare Beauty
      <br></br>

      {
        db && db.map(dbItem => (
          <div className="box" key={dbItem.id}>
            <strong>{dbItem.brand}</strong><br></br>
            {dbItem.name}
            {dbItem.price}
            <img src={dbItem.image} alt={dbItem.name} />
            {dbItem.description}
            {dbItem.category}
            {dbItem.rating}
            {dbItem.product_type}

            {dbItem.product_colors && dbItem.product_colors.map(data => (
              <div key={data.hex_value}>
                {data.hex_value}
                {data.colour_name}
              </div>
            ))}
          </div>
        ))
      }
    </div>
  );
}

export default App;
