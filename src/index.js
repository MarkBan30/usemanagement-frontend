import React from 'react';
import ReactDOM from 'react-dom/client';
import 'index.css';
import UserCard from 'components/Cards/UserCard'
import { createBrowserHistory } from "history";
import { Row } from "reactstrap";
import { faUser, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AddUserModal from 'components/Modals/AddUserModal'
import EditUserModal from 'components/Modals/EditUserModal'
import DeleteResourceModal from 'components/Modals/DeleteResourceModal'
import UserAPI from "apis/UserAPI"
import { Switch, Route, Router, Redirect } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';


const hist = createBrowserHistory();
class App extends React.Component {
  user_api = new UserAPI()
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      curUser: { id: 0, name: '' },
      isAddUserModalOpen: false,
      isRemoveUserModalOpen: false,
      isEditUserModalOpen: false,
    }
  }
  componentDidMount() {
    this.init_users()
  }
  init_users = () => {
    // this.user_api.load_users().then((users) => {
    //   this.setState({ users })
    // })
    const users = []
    users.push({
      "id": 1,
      "name": "Samuel",
      "age": 30
    })
    users.push({
      "id": 2,
      "name": "Zhihao",
      "age": 22
    })
    this.setState({ users })
  }

  addUser = (payload) => {
    let curUsers = this.state.users
    curUsers.push(payload)
    this.setState({ users: curUsers })
  }

  // addUser = (payload) => {
  //   this.user_api.add_user(payload).then(() => {
  //     this.init_users();
  //   })
  // }

  removeUser = (uid) => {
    if (this.state.users !== undefined && this.state.users.length > 0) {
      let curUsers = this.state.users.filter((u) => {
        return u.id !== uid
      })
      this.setState({
        isRemoveUserModalOpen: false,
        users: curUsers
      })
    }
  }

  editUser = (user) => {
    if (this.state.users !== undefined && this.state.users.length > 0) {
      let newUsers = this.state.users.map((u, k) => {
        if (u.id === user.id) {
          u.name = user.name
          u.age = user.age
        }
        return u
      })

      this.setState({
        isEditUserModalOpen: false,
        users: newUsers
      })
    }
  }

  // removeUser = (uid) => {
  //   console.log(uid)
  //   this.user_api.delete_user(uid).then(() => {
  //     this.init_users();
  //   })
  // }

  render() {
    return (
      <>
        <Row>
          <UserCard
            key={"UserCard-0"}
            icon={<FontAwesomeIcon style={{ fontSize: "48px", color: "green" }} icon={faPlus} />}
            style={{ "textAlign": "center" }}
            size='3'
            removeOption={false}
            showButton={true}
            btnText="Create"
            user={{ name: "New User" }}
            onClick={() => {
              this.setState({
                isAddUserModalOpen: true
              })
            }}
          />
        </Row>
        <Row>
          {this.state.users.map((user, key) => {
            return (
              <UserCard
                key={`UserCard-` + key}
                icon={<FontAwesomeIcon style={{ fontSize: "48px", color: "green" }} icon={faUser} />}
                style={{ "textAlign": "center" }}
                size='3'
                removeOption={true}
                user={user}
                showButton={false}
                onClickRemove={() => {
                  this.setState({ curUser: { name: user.name, id: user.id, age: user.age }, isRemoveUserModalOpen: true })
                }}
                onClickEdit={() => {
                  this.setState({ curUser: { name: user.name, id: user.id, age: user.age }, isEditUserModalOpen: true })
                }}
              />
            )
          })}
          <DeleteResourceModal
            resource={this.state.curUser.name}
            isOpen={this.state.isRemoveUserModalOpen}
            close={() => { this.setState({ isRemoveUserModalOpen: false, curUser: { name: '', id: 0 } }) }}
            handleDelete={() => this.removeUser(this.state.curUser.id)}
          />

          <AddUserModal
            isOpen={this.state.isAddUserModalOpen}
            close={() => { this.setState({ isAddUserModalOpen: false }) }}
            btnText="Create"
            addUser={this.addUser}
          />
          <EditUserModal
            isOpen={this.state.isEditUserModalOpen}
            close={() => { this.setState({ isEditUserModalOpen: false }) }}
            btnText="Modify"
            user={this.state.curUser}
            editUser={this.editUser}
          />
        </Row>
      </>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router history={hist}>
    <Switch>
      <Route path="/ztgg" render={props => <App {...props} />} />
      <Route path="/ztgg/home" render={props => <App {...props} />} />
      <Redirect to="/ztgg/home" />
    </Switch>
  </Router>
);