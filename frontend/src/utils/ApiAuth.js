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

const apiAuth = new ApiAuth("https://api.ddsed.nomoreparties.sbs/");
export default apiAuth;