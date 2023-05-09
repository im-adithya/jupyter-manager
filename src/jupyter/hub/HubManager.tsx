import { Provider as ReduxProvider } from 'react-redux';
import { createStore } from 'redux';
import { compose } from 'react-recompose';
import { initialState, reducers } from './Store';
import withAPI from './util/withAPI';
import { HashRouter, Routes, Route } from 'react-router-dom';
import ServerDashboard from './components/ServerDashboard';
import Groups from './components/group/Groups';
import GroupEdit from './components/group/GroupEdit';
import CreateGroup from './components/group/CreateGroup';
import AddUser from './components/user/AddUser';
import EditUser from './components/user/EditUser';

import './../../../style/jupyterhub/root.css';

const store = createStore(reducers, initialState);

const ServerDashboardCompose = compose(withAPI)(ServerDashboard);
const GroupsCompose = compose(withAPI)(Groups);
const GroupEditCompose = compose(withAPI)(GroupEdit);
const CreateGroupCompose = compose(withAPI)(CreateGroup);
const AddUserCompose = compose(withAPI)(AddUser);
const EditUserCompose = compose(withAPI)(EditUser);

const HubManager = (): JSX.Element => {
  return (
    <div>
      <ReduxProvider store={store}>
        <HashRouter>
          <Routes>
            <Route path="/" element={<ServerDashboardCompose />} />
            <Route path="/groups" element={<GroupsCompose />} />
            <Route path="/group-edit" element={<GroupEditCompose />} />
            <Route path="/create-group" element={<CreateGroupCompose />} />
            <Route path="/add-users" element={<AddUserCompose />} />
            <Route path="/edit-user" element={<EditUserCompose />} />
          </Routes>
        </HashRouter>
      </ReduxProvider>
    </div>
  );
};

export default HubManager;
