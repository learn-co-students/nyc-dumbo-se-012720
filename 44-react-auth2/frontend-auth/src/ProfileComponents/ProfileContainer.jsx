import React, { Component } from 'react';
import Snack from './Snack'
import NewSnackForm from './NewSnackForm'

class ProfileContainer extends Component {

  render() {
    let {username, cheesecakes} = this.props.user
    let arrayOfComponents = cheesecakes.map(cheesecake => {
      return <Snack key={cheesecake.id} snack={cheesecake} />
    })

    return (
      <div>
        <h2>{username}&apos;s Profile</h2>
        <h3>Cheese cakes</h3>

        <ol>
          {arrayOfComponents}
        </ol>

        <NewSnackForm />

      </div>
    );
  }

}

export default ProfileContainer;
