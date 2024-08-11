import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div>
        <p>
            Error 404 Page Not NotFound
        </p>
        <Link to={"/"} > Go back to main page</Link>
    </div>
  )
}

export default NotFound  