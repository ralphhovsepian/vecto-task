import { RoutesComponent } from './routes/Routes.tsx';
import { Navbar } from './components/Navbar/Navbar';

import './app.css';

function App() {
  return (
    <div className="app">
      <RoutesComponent />
      <Navbar />
    </div>
  );
}

export default App;
