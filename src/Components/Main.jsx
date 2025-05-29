// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { GETALL_USERDETAILE_REQUEST } from './Type'; // adjust path if needed

// function Main() {
//   const dispatch = useDispatch();

// //   const { loading, error } = useSelector(state => state.user); 
//   const users = useSelector((state) => state.user?.users || []);

//   useEffect(() => {
//     dispatch({ type: GETALL_USERDETAILE_REQUEST });
//   }, [dispatch]);

//   return (
//     <div className='container'>
//       <h4>CRUD operation app</h4>

//       {/* {loading && <p>Loading...</p>} */}
//       {/* {error && <p style={{ color: 'red' }}>{error}</p>} */}

//       <table className='table'>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>FullName</th>
//             <th>Email</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {Array.isArray(users) && users.map((user, index) => (
//             <tr key={index}>
//               <td>{user.id}</td>
//               <td>{user.name}</td>
//               <td>{user.email}</td>
//               <td>
//                 <button className='btn btn-sm btn-info'>Edit</button>
//                 <button className='btn btn-sm btn-danger'>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Main;


import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getalluserdetailRequest } from './MainAction';

function Main() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form Data Submitted:', formData);

    dispatch(getalluserdetailRequest(formData));

    alert('Form submitted (but not confirmed success from server)');
  };

  return (
    <div className="container mt-4" style={{ maxWidth: '400px' }}>
      <h3 className="mb-4">Login Form</h3>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
}

export default Main;
