import './App.css';
import FieldsetUserData from './components/FieldsetUserData';

function App() {
  return (
    <div className="fieldsets-container">
      <FieldsetUserData />

      <fieldset>

        <label>CV: 
          <textarea></textarea>
        </label>

        <label>Job: 
          <textarea></textarea>
        </label>

        <label>Job description: 
          <input type="text"></input>
        </label>

      </fieldset>
    </div>
    
  );
}

export default App;
