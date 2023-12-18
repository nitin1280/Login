// Import necessary React components and hooks
import React, { useState, useEffect } from 'react';
import "../App.css"
// Dummy API endpoint
const dummyApiEndpoint = 'https://jsonplaceholder.typicode.com/users';

// App component
function Login() {
  // State to manage login status
  const [isLoggedIn, setLoggedIn] = useState(false);

  // State to store user data
  const [userList, setUserList] = useState([]);

  // State to manage user search
  const [searchTerm, setSearchTerm] = useState('');

  // State to store filtered user list based on search
  const [filteredUsers, setFilteredUsers] = useState([]);

  // Dummy login function
  const [loginError, setLoginError] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // Dummy login function with validation
  const handleLogin = () => {
    // Basic validation
    if (!username.trim() || !password.trim()) {
      setLoginError('Please enter both username and password.');
      return;
    }

    // In a real app, you'd perform actual authentication here
    setLoggedIn(true);
    setLoginError('');
  };

  // Dummy logout function
  const handleLogout = () => {
    // In a real app, you'd perform actual logout logic here
    setLoggedIn(false);
  };

  // Fetch user data from the dummy API
  useEffect(() => {
    if (isLoggedIn) {
      fetch(dummyApiEndpoint)
        .then(response => response.json())
        .then(data => setUserList(data));
    }
  }, [isLoggedIn]);

  // Update filteredUsers when user searches
  useEffect(() => {
    if (isLoggedIn) {
      const filtered = userList.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredUsers(filtered);
    }
  }, [searchTerm, userList, isLoggedIn]);

  // Render login page if not logged in
  if (!isLoggedIn) {
    return (
      <div>
        <h1>Login Page</h1>
        <input
          type='text'
          placeholder='Enter Your Name'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /><br />
        <input
          type='password'
          placeholder='Enter Your Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /> <br />
        <button onClick={handleLogin}>Login</button>
        {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
      </div>
    );
  }

  // Render user list and search functionality if logged in
  return (
    <div>
      <h1>User List</h1>
      <button onClick={handleLogout}>Logout</button>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />

      {/* User table */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Street</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.address.street}</td>
              <td>{user.address.city}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Login;