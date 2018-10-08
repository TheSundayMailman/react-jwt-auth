export const loadAuthToken = () => {
  return localStorage.getItem('authToken');
};

export const saveAuthToken = authToken => {
  try {
    localStorage.setItem('authToken', authToken);
  }
  catch (err) {
    console.error(err);
  }
};

export const clearAuthToken = () => {
  try {
    localStorage.removeItem('authToken');
  }
  catch (err) {
    console.error(err);
  }
};
