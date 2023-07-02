/*
export const BASE_URL = "https://api.ddsed.nomoreparties.sbs";

export const register = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
  })
  .then((response) => {
      try {
        if (response.ok)
          return response.json()
    } catch (e) {
      return (e)
    }
  })
  .then((data) => {
      return data;
  })
  .catch((err) => console.log(err));
}
        

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
  })
  .then((response => response.json()))
  .then((data) => {
      if (data.token) {
        localStorage.setItem("token", data.token);
        return data.token;
      }
  })
  .catch(err => console.log(err))
};

export const getContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
          'Accept': 'application/json',
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
      }
  })
  .then(res => res.json())
  .then(data => data)
} */

//ВАРИАНТ РАБОЧИЙ
class ApiAuth {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  _checkPromiseStatus(res) {
      if (res.ok) {
          return res.json();
      }

      return Promise.reject(`Ошибка: ${res.status}`);
  }

  register(email, password) {
      return fetch(`${this._baseUrl}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password }),
      })
      .then(this._checkPromiseStatus);
  }

  login(email, password) {
      return fetch(`${this._baseUrl}/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })
      .then(this._checkPromiseStatus);
  }

  checkToken(token) {
      return fetch(`${this._baseUrl}/users/me`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(this._checkPromiseStatus);
  }
}

const apiAuth = new ApiAuth("https://api.ddsed.nomoreparties.sbs");
export default apiAuth; 