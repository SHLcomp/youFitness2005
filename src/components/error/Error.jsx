import './Error.scss';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="error">
      <h1>404</h1>
      <h2>Hello there, This page does not exist or was not created yet!</h2>
      <h3>Please let me know if this is an issue, thank you.</h3>
      <p>- Sarah .H</p>

      <Link to='/'><button>Go back to home page</button></Link>
    </div>
  )
}

export default Error
