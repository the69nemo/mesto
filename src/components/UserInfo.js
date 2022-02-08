class UserInfo {
  constructor ({ userName, userJob, avatar, userId }) {
    this._name = userName;
    this._job = userJob;
    this._avatar = avatar;
    this.userId = userId;
  }

  getUserInfo () {
    return {
     name: this._name.textContent,
     about: this._job.textContent,
    };
  }

  setUserInfo ({ newName, newJob, newAvatar }) {
    if (newName) {
      this._name.textContent = newName;
    } else {
      this._name.textContent;
    }

    if (newName) {
      this._job.textContent = newJob
    } else {
      this._job.textContent;
    }

    if (newAvatar) {
      this._avatar.src = newAvatar
    } else {
      this._avatar.src;
    }
  }
}

export { UserInfo }