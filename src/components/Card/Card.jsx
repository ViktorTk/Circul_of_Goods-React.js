import { Link } from 'react-router-dom'
import './Card.css'

export const Card = ({ id, title, price, adress, date, img }) => {
  return (
    <Link to={`/product/${id}`} className="card">
      <div className="card--img">
        <img src={`${img}`} alt="card-img" />
      </div>
      <h5 className="card--title">{title}</h5>
      <strong className="card--price">{price}</strong>
      <div className="card--desc-box">
        <span className="card--desc">{adress}</span>
        <span className="card--desc">{date}</span>
      </div>
    </Link>
  )
}

// export const Card = (props) => {
//   return (
//     <Link to={`/product/${props.id}`} className="card">
//       <div className="card--img">
//         <img src={`${props.img}`} alt="card-img" />
//       </div>
//       <h5 className="card--title">{props.title}</h5>
//       <strong className="card--price">{props.price}</strong>
//       <div className="card--desc-box">
//         <span className="card--desc">{props.adress}</span>
//         <span className="card--desc">{props.date}</span>
//       </div>
//     </Link>
//   )
// }
