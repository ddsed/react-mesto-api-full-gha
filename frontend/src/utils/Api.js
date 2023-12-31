//ВАРИАНТ РАБОЧИЙ
class Api {
  constructor(baseUrl, token) {
    this._baseUrl = baseUrl;
    this._token = token;
  }

  _getHeaders() {
    return {
      "Content-type": "application/json",
      authorization: this._token,
    };
  }

  _getJson(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserInfoApi() {
    const token = localStorage.getItem("jwt");
    return fetch(`${this._baseUrl}/users/me `, {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    }).then(this._getJson);
  }

  getInitialCards() {
    const token = localStorage.getItem("jwt");
    return fetch(`${this._baseUrl}/cards`, {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    }).then(this._getJson);
  }

  createNewCard(data) {
    const token = localStorage.getItem("jwt");
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
          link: data.link,
          name: data.name
      }),
    }).then(this._getJson);
  }
  
  deleteCardApi(id) {
    const token = localStorage.getItem("jwt");
    return fetch(`${this._baseUrl}/cards/${id} `, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    }).then(this._getJson);
  }

  changeAvatar(avatar) {
    const token = localStorage.getItem("jwt");
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        avatar: avatar.avatar,
      }),
    }).then(this._getJson);
  }

  getAllCardWhithUser() {
    return Promise.all([this.getInitialCards(), this.getUserInfoApi()]);
  }

  editUserInfo(data) {
    const token = localStorage.getItem("jwt");
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    }).then(this._getJson);
  }

  _addLike(id) {
    const token = localStorage.getItem("jwt");
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    })
    .then(this._getJson);
  }

  _deleteLike(id) {
    const token = localStorage.getItem("jwt");
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    })
    .then(this._getJson);
  }

  changeLikeCardStatus(cardId, isLiked) {
    return isLiked ? this._deleteLike(cardId) : this._addLike(cardId);
  }
}

const api = new Api('https://api.ddsed.nomoreparties.sbs');
export default api;