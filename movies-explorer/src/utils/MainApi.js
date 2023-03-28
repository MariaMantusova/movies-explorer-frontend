class MainApi {
    constructor(config) {
        this._url = config.url;
        this._header = config.headers;
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
}

const mainApiOption = {
    url: "https://api.aboutfilms.nomoredomains.work",
    headers: {
        "Content-Type": "application/json",
    },
}

export const mainApi = new MainApi(mainApiOption);
