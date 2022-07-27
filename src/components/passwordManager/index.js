import {Component} from 'react'
import {v4} from 'uuid'
import PasswordItem from '../passwordItem'
import './index.css'

class PasswordManager extends Component {
  state = {
    passwordList: [],
    website: '',
    userName: '',
    password: '',
    searchInput: '',
    isChecked: false,
  }

  onWebsiteChange = event => {
    this.setState({website: event.target.value})
  }

  onUserNameChange = event => {
    this.setState({userName: event.target.value})
  }

  onPasswordChange = event => {
    this.setState({password: event.target.value})
  }

  onSearchChange = event => {
    this.setState({searchInput: event.target.value})
  }

  onDelete = id => {
    const {passwordList} = this.state
    const updatedList = passwordList.filter(each => each.id !== id)

    this.setState({passwordList: updatedList})
  }

  onSubmitDetails = event => {
    event.preventDefault()
    const {website, userName, password} = this.state

    const newList = {
      id: v4(),
      website,
      userName,
      password,
    }
    console.log(newList)

    this.setState(prevSate => ({
      passwordList: [...prevSate.passwordList, newList],
      website: '',
      userName: '',
      password: '',
    }))
  }

  onChecked = () => {
    this.setState(prev => ({isChecked: !prev.isChecked}))
  }

  render() {
    const {
      website,
      userName,
      password,
      passwordList,
      isChecked,
      searchInput,
    } = this.state

    const filteredList = passwordList.filter(eachItem =>
      eachItem.website.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="logo-image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
              alt="app logo"
              className="logo-image"
            />
          </div>

          <div className="password-input-container">
            <div className="password-img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
                alt="password manager"
                className="password-img"
              />
            </div>
            <form className="form-container" onSubmit={this.onSubmitDetails}>
              <h1 className="form-heading">Add New Password</h1>
              <div className="button-input-container">
                <button type="button" className="img-button">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                    className="input-img"
                  />
                </button>
                <input
                  type="text"
                  className="input-element"
                  placeholder="Enter Website"
                  onChange={this.onWebsiteChange}
                  value={website}
                />
              </div>
              <div className="button-input-container">
                <button type="button" className="img-button">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                    className="input-img"
                  />
                </button>
                <input
                  type="text"
                  className="input-element"
                  placeholder="Enter Username"
                  onChange={this.onUserNameChange}
                  value={userName}
                />
              </div>
              <div className="button-input-container">
                <button type="button" className="img-button">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                    className="input-img"
                  />
                </button>
                <input
                  type="password"
                  className="input-element"
                  placeholder="Enter Password"
                  onChange={this.onPasswordChange}
                  value={password}
                />
              </div>
              <div className="add-btn-container">
                <button className="add-button" type="submit">
                  Add
                </button>
              </div>
            </form>
          </div>

          <div className="password-saving-container">
            <div className="password-saving-input-container">
              <div className="count-container">
                <h1 className="your-password-text">Your Passwords</h1>
                <p className="pass-count">{filteredList.length}</p>
              </div>

              <div className="input-search-container">
                <button type="button" className="search-button">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png "
                    alt="search"
                    className="input-search-img"
                  />
                </button>
                <input
                  type="search"
                  className="password-saving-input-element"
                  placeholder="Search"
                  onChange={this.onSearchChange}
                  value={searchInput}
                />
              </div>
            </div>
            <hr className="horizontal-line" />
            <div className="show-password-container">
              <input
                id="showPassword"
                type="checkbox"
                className="checkbox-element"
                checked={isChecked}
                onChange={this.onChecked}
              />
              <label htmlFor="showPassword" className="checkbox-label">
                Show passwords
              </label>
            </div>
            <div className="password-items-container">
              {filteredList.length >= 1 ? (
                <ul className="list-items-container">
                  {filteredList.map(eachItem => (
                    <PasswordItem
                      key={eachItem.id}
                      passList={eachItem}
                      isChecked={isChecked}
                      onDelete={this.onDelete}
                    />
                  ))}
                </ul>
              ) : (
                <div className="no-password-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                    alt="no passwords"
                    className="no-pass-img"
                  />
                  <p className="no-password-text">No Passwords</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
