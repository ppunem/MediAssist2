import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-light">
    <p className="navbar-brand">Navbar</p>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon">Hi</span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <p className="nav-link active">
          Home
          <span className="sr-only">(current)</span>
        </p>
        <p className="nav-link">Features</p>
        <p className="nav-link">Pricing</p>
        <p className="nav-link">Membership</p>
      </div>
    </div>
  </nav>
)

export default Header
