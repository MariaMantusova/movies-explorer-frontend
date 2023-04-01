class MainApi {
    constructor(config) {
        this._url = config.url;
        this._header = config.headers;
        this._token = '';
    }

    registerUser(password, email, name) {
        return fetch(`${this._url}/signup`, {
            method: 'POST',
            headers: this._header,
            body: JSON.stringify({
                email: email,
                password: password,
                name: name
            })
        })
            .then((res) => {
                if (res.ok || res.status === 409) {
                    return res.json();
                } else {
                    return Promise.reject(new Error(res.status.toString()));
                }
            })
            .catch((err) => console.log(err));
    };

    authorizeUser(password, email) {
        return fetch(`${this._url}/signin`, {
            method: 'POST',
            headers: this._header,
            body: JSON.stringify({
                password: password,
                email: email
            })
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(new Error(res.status.toString()));
                }
            })
            .catch((err) => console.log(err));
    };

    validityCheck(JWT) {
        return fetch(`${this._url}/users/me`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${JWT}`
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(new Error(res.status.toString()));
                }
            })
            .catch((err) => console.log(err));
    };

    getUserInfo() {
        return fetch(`${this._url}/users/me`, {
            headers: {
                Authorization: this._getAuthHeader()
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(new Error(res.status.toString()));
                }
            })
            .catch((err) => Promise.reject(err));
    }

    changeUserInfo(name, email) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: this._getAuthHeader()
            },
            body: JSON.stringify({
                name: name,
                email: email
            })
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(new Error(res.status.toString()));
                }
            })
            .catch((err) => Promise.reject(err));
    }

    getSavedMovies() {
        return fetch(`${this._url}/movies`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: this._getAuthHeader()
            },
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(new Error(res.status.toString()));
                }
            })
            .catch((err) => Promise.reject(err));
    }

    saveMovie(country, director, duration, year, description, image, trailerLink,
                nameRU, nameEN, thumbnail, movieId) {
        return fetch(`${this._url}/movies`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: this._getAuthHeader()
            },
            body: JSON.stringify({
                country: country,
                director: director,
                duration: duration,
                year: year,
                description: description,
                image: image,
                trailerLink: trailerLink,
                nameRU: nameRU,
                nameEN: nameEN,
                thumbnail: thumbnail,
                movieId: movieId
            })
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(new Error(res.status.toString()));
                }
            })
            .catch((err) => console.log(err));
    };

    deleteMovie(id) {
        return fetch(`${this._url}/movies/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: this._getAuthHeader()
            },
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(new Error(res.status.toString()));
                }
            })
            .catch((err) => Promise.reject(err));

    }

    _getAuthHeader() {
        if (this._token !== '') {
            return `Bearer ${this._token}`
        }
        if (localStorage.getItem("jwt") !== '') {
            this._token = localStorage.getItem("jwt")
            return `Bearer ${this._token}`
        }
        return ''
    }

}

const mainApiOption = {
    url: "https://api.aboutfilms.nomoredomains.work",
    headers: {
        "Content-Type": "application/json",
    },
}

export const mainApi = new MainApi(mainApiOption);
