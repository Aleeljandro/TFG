import BACKEND_URL from "./confi";


const getUsersFromLocalStorage = () => {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
  };
  
  const saveUsersToLocalStorage = (users) => {
    localStorage.setItem('users', JSON.stringify(users));
  };
  
  export const registerUser = (user) => {
    return fetch(`${BACKEND_URL}/api/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      }).then(response => response.json());
  };
  
  export const loginUser = (user) => {
    return fetch(`${BACKEND_URL}/api/users`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    }).then(response => response.json());
  };
  
  export const forgotPassword = (email) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const users = getUsersFromLocalStorage();
        const user = users.find(u => u.email === email);
        if (user) {
          resolve('Recovery link sent successfully');
        } else {
          reject('Email not registered');
        }
      }, 1000); // Simula un retraso de 1 segundo
    });
  };