import './App.css';
import CohortDetails from './Components/CohortDetails';

function App() {

  return (

    <div>

      <h1>Academy Dashboard</h1>

      <CohortDetails
        code="INTADMDF10"
        status="ongoing"
        trainer="John"
        coach="David"
        startDate="10-Jun-2026"
        week="4"
      />

      <CohortDetails
        code="JFSADF11"
        status="completed"
        trainer="Mary"
        coach="Steve"
        startDate="15-Jan-2026"
        week="12"
      />

      <CohortDetails
        code="REACTDF12"
        status="ongoing"
        trainer="Alex"
        coach="Chris"
        startDate="01-Jul-2026"
        week="2"
      />

    </div>

  );

}

export default App;