class UserInfo {
  constructor ({ userName, userJob, avatar, userId }) {
    this._name = userName;
    this._job = userJob;
    this._avatar = avatar;
    this._userId = userId;
  }

  getUserInfo () {
    return {
     name: this._name.textContent,
     about: this._job.textContent,
    };
  }

  setUserInfo ({ newName, newJob, newAvatar }) {
    newName ? (this._name.textContent = newName) : this._name.textContent;
    newJob ? (this._job.textContent = newJob) : this._job.textContent;
    newAvatar ? (this._avatar.src = newAvatar) : this._avatar.src;
  }
}

export { UserInfo }