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
              <div>
                <button type="button">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                    className="input-img"
                  />
                </button>
                <input type="text" />
              </div>
              <div>
                <button type="button">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="website"
                    className="input-img"
                  />
                </button>
                <input type="text" />
              </div>
              <div>
                <button type="button">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="website"
                    className="input-img"
                  />
                </button>
                <input type="text" />
              </div>
              <div className="add-btn-container">
                <button className="add-button" type="submit">
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
