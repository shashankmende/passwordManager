import './index.css'

const PasswordItems = props => {
  const {user, isChecked, onClickDelete} = props
  const {id, username, password, website} = user

  const initial = username.slice(0, 1).toUpperCase()
  console.log(initial)
  const encryptedPassword = isChecked ? (
    password
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
    />
  )
  console.log(encryptedPassword)

  const onClickDeleteBtn = () => {
    onClickDelete(id)
  }

  return (
    <li className="list-item">
      <div className="initial-container">
        <p>{initial}</p>
      </div>
      <div>
        <p>{username}</p>
        <p>{website}</p>
        <p>{encryptedPassword}</p>
      </div>
      <button
        type="button"
        className="button"
        onClick={onClickDeleteBtn}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="deleteimage"
        />
      </button>
    </li>
  )
}

export default PasswordItems
