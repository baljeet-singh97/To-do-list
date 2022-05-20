import React from 'react'
import PropTypes from 'prop-types'
export default function Header(props) {
  return (
    <nav class="navbar navbar-dark bg-dark">
  <span class="navbar-text">
  Define Your Goal And Break It Down ! ! !
  </span>
</nav>
  )
}

Header.defaultProps = {
  title: "Your title Here",
  searchBar: true

}

Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired
}

