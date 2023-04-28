// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, toggleIsStarred} = props
  const {id, title, date, isStarred} = appointmentDetails

  const starImgUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onClickStar = () => {
    toggleIsStarred(id)
  }

  return (
    <li className="appointment-item">
      <div className="header-container">
        <p className="title">{title}</p>
        <button
          className="start-button"
          type="button"
          onClick={onClickStar}
          data-testid="star"
        >
          <img src={starImgUrl} className="star" alt="star" />
        </button>
      </div>
      <div className="date-container">
        <p className="date">Date: {date}</p>
      </div>
    </li>
  )
}
export default AppointmentItem
