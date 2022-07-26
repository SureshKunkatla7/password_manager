import {Component} from 'react'
import './index.css'

class PasswordManager extends Component {
  render() {
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
            <form className="form-container">
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
                />
              </div>
              <div className="button-input-container">
                <button type="button" className="img-button">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="website"
                    className="input-img"
                  />
                </button>
                <input
                  type="text"
                  className="input-element"
                  placeholder="Enter Username"
                />
              </div>
              <div className="button-input-container">
                <button type="button" className="img-button">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="website"
                    className="input-img"
                  />
                </button>
                <input
                  type="password"
                  className="input-element"
                  placeholder="Enter Password"
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
              <h1 className="your-password-text">Your Passwords</h1>
              <div className="input-search-container">
                <button type="button" className="search-button">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png "
                    alt="search"
                    className="input-search-img"
                  />
                </button>
                <input
                  type="text"
                  className="password-saving-input-element"
                  placeholder="Search"
                />
              </div>
            </div>
            <hr className="horizontal-line" />
            <div className="show-password-container">
              <input
                id="showPassword"
                type="checkbox"
                className="checkbox-element"
              />
              <label htmlFor="showPassword" className="checkbox-label">
                Show Password
              </label>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
