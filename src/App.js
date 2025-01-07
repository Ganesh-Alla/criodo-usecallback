import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ELO1 from './Tasks/ELO1';
import ELO2 from './Tasks/ELO2';
import ELO3 from './Tasks/ELO3';
import ELO4 from './Tasks/ELO4';
import ELO5 from './Tasks/ELO5';
import ELO21 from './Tasks/ELO21';
import ELO41 from './Tasks/ELO41';

const App = () => {
  return (
    <Router future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true, 
    }}>
    <div>
      <h1>Crio.do UseCallback Assignment</h1>
      <nav>
        <ul>
          <li><Link to="/ELO1">Expected Learning Outcome 1 (Re-rendering of components) </Link></li>
          <li><Link to="/ELO2">Expected Learning Outcome 2 (Compare Behavior btwn with and without useCallback)</Link></li>
          <li><Link to="/ELO21">Expected Learning Outcome 2 (Still Re-rending After using Callback)</Link></li>
          <li><Link to="/ELO3">Expected Learning Outcome 3 (Solving re-rending issue using React.memo hook)</Link></li>
          <li><Link to="/ELO4">Expected Learning Outcome 4 (Understand the need of dependency array - No Array)</Link></li>
          <li><Link to="/ELO41">Expected Learning Outcome 4 (Understand the need of dependency array - Empty Array)</Link></li>
          <li><Link to="/ELO5">Expected Learning Outcome 5 (Using dependency array)</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/ELO1" element={<>
          <h3>1.User understands that in scenarios when child component has functions passed as prop, child components gets re-rendered unnecessarily when parent re-renders, due to the function reference changing.</h3>
          <hr></hr>
          <ELO1 />
          <p>
            Change the input field to see the behavior of re-rendering of both parent and child components.This is because of change in reference of Increment Button on every re-render due to change in value of input field.
          </p>
        </>} />
        <Route path="/ELO2" element={<>
          <h3>2.User should be able to use useCallback() to avoid function reference change when a component re-renders.</h3>
          <h5>Comparing the behavior of the functions with useCallback and without useCallback hook.</h5>
          <hr></hr>
          <ELO2 />
          <p>
            Try clicking the buttons or changing the input so that we can observe that only the function without useCallback hook re-renders.
          </p>
        </>} />
        <Route path="/ELO21" element={<>
          <h3>2.User should be able to use useCallback() to avoid function reference change when a component re-renders.</h3>
          <h5>Child Component still re-renders after preventing function reference change.</h5>
          <hr></hr>
          <ELO21 />
          <p>
            Try changing the input field to rerender the parent component. we can observe that child component also re-renders along with parent though the function is not recreating.
          </p>
        </>} />
        <Route path="/ELO3" element={<>
          <h2>3.User should be able ot use React.Memo() along with useCallback() to resolve the unnecessary re-render issue.</h2>
          <hr></hr>
          <ELO3 />
          <p>
            Here we can observe that child component is not re-rendered.
          </p>
        </>} />
        <Route path="/ELO4" element={<>
          <h2>4.User understands the need of dependency array in useCallback Hook.</h2>
          <h5>No Dependency Array.</h5>
          <hr></hr>
          <ELO4 />
          <p>
            Try clicking on Increment button, you observe that the Mutiply Button(Child Component)  is re-rendering, although the child component wrapped with Memo hook and function wrapped with useCallback.
            This is because there is no dependency array, which means useCallback will re-create the function every time the parent component re-renders.
          </p>
        </>} />
        <Route path="/ELO41" element={<>
          <h2>4.User understands the need of dependency array in useCallback Hook.</h2>
          <h5>Empty Dependency Array.</h5>
          <hr></hr>
          <ELO41 />
          <p>
            Try clicking on Increment button, you observe that the Mutiply Button(Child Component) is not re-rendering.
            This is because there is an empty dependency array, which means useCallback will not re-create the function when the parent component re-renders.
            But multiplier will not update to mutiply with the count as the function doesn't recreate.
          </p>
        </>} />
        <Route path="/ELO5" element={<>
          <h2>5.User should be able to use dependency array with useCallback.</h2>
          <hr></hr>
          <ELO5 />
          <p>
            Try changing the input field, you observe that the Mutiply Button(Child Component) is re-rendering.
            This is because there is a dependency array, which means useCallback will re-create the function when the parent component re-renders,
            and also when the dependency changes (i.e., input field in this case).
          </p>
        </>} />
        <Route path="/" element={<>Navigate to the Learning Outcomes</>} />
      </Routes>
    </div>
  </Router>
);
};

export default App;
