const baseUrl = "https://api.ddsed.nomoreparties.sbs/";

class Api {
    constructor(baseUrl) {
      this._baseUrl = baseUrl
        // this._baseUrl = options.baseUrl;
        // this._headers = options.headers;
    }
    
    _getHeaders() {
      return {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };
    }

    _checkPromiseStatus(res) {
      if (res.ok) {
          return res.json();
      }

      return Promise.reject(`Ошибка: ${res.status}`);
    }

    _request(url, options) {
      return fetch(url, options).then(this._checkPromiseStatus);
    }

    getInitialCards() {
      return this._request(`${this._baseUrl}/cards`, {  
          method: "GET",
          headers: this._getHeaders(),
      });
    }

    getUserInfoApi() {
        return this._request(`${this._baseUrl}/users/me`, {
          headers: this._getHeaders(),
        });
    }

    editUserInfo(data) {
        return this._request(`${this._baseUrl}/users/me`, {
          method: "PATCH",
          headers: this._getHeaders(),
          body: JSON.stringify({
            name: data.name, 
            about: data.about
          }),
        });
    }

    createNewCard(data) {
        return this._request(`${this._baseUrl}/cards`, {   
            method: "POST",
            headers: this._getHeaders(),
            body: JSON.stringify({
                name: data.name,
                link: data.link 
            }),
        });
    }

    deleteCardApi(id) {
        return this._request(`${this._baseUrl}/cards/${id}`, {
          method: "DELETE",
          headers: this._getHeaders(),
        });
    }

    _addLike(id) {
      return this._request(`${this._baseUrl}/cards/${id}/likes`, {
        method: "PUT",
        headers: this._getHeaders(),
      });
    }

    _deleteLike(id) {
      return this._request(`${this._baseUrl}/cards/${id}/likes`, {
        method: "DELETE",
        headers: this._getHeaders(),
      });
    }

    changeLikeCardStatus(id, isLiked) {
      return isLiked ? this._deleteLike(id) : this._addLike(id);
    }

    changeAvatar(avatar) {
      return this._request(`${this._baseUrl}/users/me/avatar`, {
        method: "PATCH",
        headers: this._getHeaders(),
        body: JSON.stringify({
          avatar: avatar.avatar
        }),
      });
    }
}


/* const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-61',
  headers: {
    authorization: "25ba17d7-1766-40fc-b636-0f2523c53d74",
    "Content-Type": "application/json"
  }
}); */

const api = new Api(baseUrl);
export default api