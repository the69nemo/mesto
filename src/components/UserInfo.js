class UserInfo {
  constructor ({userName, userJob, avatar, userId}) {
    this._name = userName;
    this._job = userJob;
    this._avatar = avatar;
    this._userId = userId;
  }

  getUserInfo () {
    const user = {
     name: this._name.textContent,
     job: this._job.textContent,
    };
    return user
  }

  setUserInfo ({ userName, userJob, userAvatar }) {
    userName ? (this._name.textContent = userName) : this._name.textContent;
    userJob ? (this._job.textContent = userJob) : this._job.textContent;
    userAvatar ? (this._avatar.src = userAvatar) : this._avatar.src;
  }
}

export { UserInfo }