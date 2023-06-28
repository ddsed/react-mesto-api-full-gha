class Api {
  constructor(options) {
      this._baseUrl = options.baseUrl;
      this._headers = options.headers;
  }

  _checkPromiseStatus(res) {
      if (res.ok) {
          return res.json();
      }

      return Promise.reject(`Ошибка: ${res.status}`);
  }

  getInitialCards() {
      return fetch(`${this._baseUrl}/cards`, {  
          method: "GET",
          headers: this._headers
      })
      .then(this._checkPromiseStatus);
  }

  getUserInfoApi() {
      return fetch(`${this._baseUrl}/users/me`, {
        headers: this._headers,
      })
      .then(this._checkPromiseStatus);
  }

  editUserInfo(data) {
      return fetch(`${this._baseUrl}/users/me`, {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({
          name: data.name, 
          about: data.about
        }),
      })
      .then(this._checkPromiseStatus);
  }

  createNewCard(data) {
      return fetch(`${this._baseUrl}/cards`, {   
          method: "POST",
          headers: this._headers,
          body: JSON.stringify({
              name: data.name,
              link: data.link 
          }),
      })
      .then(this._checkPromiseStatus);
  }

  deleteCardApi(id) {
      return fetch(`${this._baseUrl}/cards/${id}`, {
        method: "DELETE",
        headers: this._headers,
      })
      .then(this._checkPromiseStatus);
  }

  _addLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: "PUT",
      headers: this._headers,
    })
    .then(this._checkPromiseStatus);
  }

  _deleteLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: "DELETE",
      headers: this._headers,
    })
    .then(this._checkPromiseStatus);
  }

  changeLikeCardStatus(id, isLiked) {
    return isLiked ? this._deleteLike(id) : this._addLike(id);
  }

  changeAvatar(avatar) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatar.avatar
      }),
    })
    .then(this._checkPromiseStatus);
  }
}

const api = new Api({
baseUrl: 'https://api.ddsed.nomoreparties.sbs/',
headers: {
  authorization: "25ba17d7-1766-40fc-b636-0f2523c53d74",
  "Content-Type": "application/json"
}
});

export default api