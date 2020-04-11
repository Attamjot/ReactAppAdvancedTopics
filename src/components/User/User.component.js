import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addUser} from '../../redux/user/user.actions';
import { selectUsers, selectSpecificUser } from '../../redux/user/user.selector';


const UserComponent = ({ users, addUser, specificUser }) => {
    const [user, setUser] = useState("");

    return (
        <div className="user-container">
            <h2>Users: </h2>
            <input type="text" className="userInput" value={user} onChange={(e) => setUser(e.target.value)} />
            <button onClick={() => {
              if(user) {
                  addUser({ id: Math.random() * 10 , name: user });
                  setUser("");
              }
            }}> ADD New User </button>
            {
                users.map(user => <p key={user.id}> { user.name } </p>)
            }
        </div>
    );
};

const mapStateToProps = (state) => ({
  users: selectUsers(state),
  specificUser: selectSpecificUser()(state)
})

const mapDispatchToProps = dispatch => ({
  addUser: user => dispatch(addUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserComponent);

