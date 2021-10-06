import React from 'react';
import Image from './Image';
import PropTypes from 'prop-types';

class UserProfile extends React.Component {
  render() {
    return (
      <ol>
        <li>name: { this.props.user.name }</li>
        <li>email: { this.props.user.email }</li>
        <Image source={this.props.user.avatar} />
      </ol>
    )
  }
}

UserProfile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    avatar: PropTypes.string,
  }),
}

export default UserProfile