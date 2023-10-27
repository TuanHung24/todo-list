//import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import FormAddTask from './components/form_add_task';
import ListTask from './components/list_task';
function App() {
  return (
    
    <Provider store={store}>
      <div class="wrapper">
            <h1 class="text-center">TODO LIST APP</h1>
    <FormAddTask/>
    <ListTask/>
    </div>
    </Provider>
    
  );
}

export default App;
