var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = () => {
  return (
  <div>
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">
            Timer App
          </li>
          <li>
            <IndexLink  to="/" activeClassName="active-link">Timer</IndexLink>
          </li>
          <li>
            <Link to="/countdown" activeClassName="active-link">Countdown</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li>
            <Link to="/about" activeClassName="active-link">About</Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
};

module.exports = Navigation;
