import './Reviews.scss';

const Reviews = ({reviews}) => {
  return (
    <div className='container2'>
      <div className="rev-count">
        <h3>{reviews.length} review\s on this item:</h3>
      </div>
      <div className="reviews">
        {/* i think I should map over a reviews data.js */}
        {reviews.map((rev, i)=>{
          return (
            <div key={i} className="review">
              <div className="info">
                <p>{rev.date}</p>
                <h4>{rev.username}</h4>
              </div>
            <div className="text">
                <p>{rev.comment}</p>
            </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Reviews
