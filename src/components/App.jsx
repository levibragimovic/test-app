import Get from './Get';
import Pay from './Pay';
import '../styles/app.scss';

const App = () => {
  return (
    <div className="app">
      <Pay />
      <Get />
    </div>
  );
};

export default App;
