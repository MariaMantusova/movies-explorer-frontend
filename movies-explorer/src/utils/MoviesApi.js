class MoviesApi {
    constructor(config) {
        this._url = config.url;
        this._header = config.headers;
    }

    getMovies() {
        return fetch(`${this._url}`, {
            headers: this._header
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
}

const moviesApiOption = {
    url: "https://api.nomoreparties.co/beatfilm-movies",
    headers: {
        "Content-Type": "application/json",
    },
}

export const moviesApi = new MoviesApi(moviesApiOption);
