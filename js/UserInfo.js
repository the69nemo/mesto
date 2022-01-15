class UserInfo {
  constructor ({nameSelector, jobSelector}){
    this._name = nameSelector;
    this._job = jobSelector;
    console.log(this._name);
    console.log(this._job)
  }

  setUserInfo ({ inputName, inputJob }) {
    this._name.textContent = inputName;
    this._job.textContent = inputJob;
  }

  getUserInfo () {
     const user = {
      name: this._name.textContent,
      job: this._job.textContent,
    };

    return user
  }
}

export { UserInfo }
