// src/components/Admin.js
import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../AuthContext';

function Admin() {
  const authContext = useContext(AuthContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/users/all', {
          headers: {
            'Authorization': `Bearer ${authContext.token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Error fetching users');
        }

        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error(error);
        alert('Error fetching users');
      }
    };

    fetchUsers();
  }, [authContext.token]);

  const handlePromoteToAdmin = async (userId, isAdmin) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/users/${isAdmin ? 'demote-admin' : 'make-admin'}/${userId}`,
        {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${authContext.token}`,
          },
        }
      );
  
      if (!response.ok) {
        throw new Error(isAdmin ? 'Error demoting user' : 'Error promoting user to admin');
      }
  
      const data = await response.json();
      alert(data.message);
  
      setUsers(
        users.map((user) => (user._id === data.user._id ? data.user : user))
      );
    } catch (error) {
      console.error(error);
      alert(isAdmin ? 'Error demoting user' : 'Error promoting user to admin');
    }
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Facebook</th>
            <th>Twitter</th>
            <th>Instagram</th>
            <th>Admin</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{`${user.firstName} ${user.lastName}`}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.facebook}</td>
              <td>{user.twitter}</td>
              <td>{user.instagram}</td>
              <td>
                <input
                  type="checkbox"
                  checked={user.isAdmin}
                  onChange={() => handlePromoteToAdmin(user._id, user.isAdmin)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;

