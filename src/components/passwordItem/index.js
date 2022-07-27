import './index.css'

const PasswordItem = props => {
  const {passList, isChecked, onDelete} = props
  const {id, website, userName, password} = passList

  const onDeleteItem = () => {
    onDelete(id)
  }

  return (
    <li className="item-container">
      <div className="profile-container">
        <p className="profile-letter">{website[0].toUpperCase()}</p>
      </div>
      <div className="details-container">
        <p className="list-item-test">{website}</p>
        <p className="list-item-test">{userName}</p>
        <p className="list-item-test">
          {isChecked ? (
            password
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
              className="star-img"
            />
          )}
        </p>
      </div>
      <div>
        <button
          type="button"
          className="button-container"
          onClick={onDeleteItem}
          testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete-img"
          />
        </button>
      </div>
    </li>
  )
}

export default PasswordItem
