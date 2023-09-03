import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordItems from '../PasswordItems'
import './index.css'

class PasswordComponent extends Component {
  state = {
    userList: [],
    website: '',
    username: '',
    password: '',
    isChecked: false,
    searchInput: '',
  }

  onChangeWebsiteInput = event => {
    console.log('website = ', event.target.value)
    this.setState({
      website: event.target.value,
    })
  }

  onClickUsername = event => {
    console.log('username = ', event.target.value)
    this.setState({
      username: event.target.value,
    })
  }

  onChangePassword = event => {
    console.log('password=', event.target.value)
    this.setState({
      password: event.target.value,
    })
  }

  onClickAddBtn = () => {
    const {userList, website, username, password} = this.state
    const newUser = {
      id: uuidv4(),
      website,
      username,
      password,
    }

    this.setState({
      userList: [...userList, newUser],
      isChecked: false,
      website: '',
      username: '',
      password: '',
    })
  }

  onClickCheckBox = () => {
    const input = document.getElementById('checkbox')
    console.log('is checked', input.checked)

    this.setState({
      isChecked: input.checked,
    })
  }

  onClickDelete = id => {
    console.log('delete btn is clicked and id is', id)
    const {userList} = this.state
    this.setState({
      userList: userList.filter(each => each.id !== id),
    })
  }

  onClickSearchInput = event => {
    const searchInput = event.target.value
    const {userList} = this.state
    this.setState({
      userList: userList.filter(each =>
        each.username.includes(event.target.value),
      ),
    })
  }

  render() {
    const {userList, isChecked, username, website, password} = this.state
    const lengthOfList = userList.length
    let unorededList
    if (lengthOfList === 0) {
      unorededList = (
        <ul className="no-passwords-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
            alt="no passwords"
          />
          <p>No Passwords</p>
        </ul>
      )
    } else {
      unorededList = (
        <ul className="passwords-container">
          {userList.map(each => (
            <PasswordItems
              user={each}
              key={each.id}
              isChecked={isChecked}
              onClickDelete={this.onClickDelete}
            />
          ))}
        </ul>
      )
    }

    console.log('user list = ', this.state)
    return (
      <div className="bg-container">
        <div className="container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
          <div className="top-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png "
              alt="password manager"
              className="small-password-manager-image"
            />
            <form className="form-container">
              <h1 className="form-heading">Add New Password</h1>
              <div className="website-logo-input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="website-image"
                />

                <input
                  type="text"
                  placeholder="Enter Website"
                  className="inputelement"
                  value={website}
                  onChange={this.onChangeWebsiteInput}
                />
              </div>
              <div className="website-logo-input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="website-image"
                />

                <input
                  type="text"
                  placeholder="Enter Username"
                  className="inputelement"
                  value={username}
                  onChange={this.onClickUsername}
                />
              </div>
              <div className="website-logo-input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="website-image"
                />

                <input
                  type="password"
                  placeholder="Enter Password"
                  className="inputelement"
                  value={password}
                  onChange={this.onChangePassword}
                />
              </div>
              <div className="button-container">
                <button
                  type="submit"
                  className="addBtn"
                  onClick={this.onClickAddBtn}
                >
                  Add
                </button>
              </div>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="large-password-manager-image"
            />
          </div>

          <div className="bottom-container">
            <div className="bottom-container-heading-container">
              <h1>Your Passwords </h1>
              <p>{lengthOfList}</p>
              <div className="website-logo-input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="website-image"
                />
                <input
                  type="search"
                  placeholder="Search"
                  className="inputelement"
                  onChange={this.onClickSearchInput}
                />
              </div>
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="checkbox"
                onChange={this.onClickCheckBox}
              />
              <label htmlFor="checkbox">Show passwords</label>
            </div>
            {unorededList}
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordComponent
