class UserInfo {
  constructor ({selectorName, selectorJob}) {
    this._name = selectorName;
    this._job = selectorJob;

  }

  getUserInfo () {
    const user = {
     name: this._name.textContent,
     job: this._job.textContent,
    };
    return user
  }

  setUserInfo ({ name, job }) {
    this._name.textContent = name;
    this._job.textContent = job;
  }
}

export { UserInfo }
