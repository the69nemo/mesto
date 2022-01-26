class UserInfo {
  constructor ({userName, userJob}) {
    this._name = userName;
    this._job = userJob;

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
