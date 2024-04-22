import './App.css';

function App() {
  const prvaVarijabla = "Veleučilište";
  const drugaVarijabla = "Algebra";


  return (
    <div>
      <p>Jedno od najboljih mjesta za učenje IT tehnologija</p>
      <p>Jedno od najboljih mjesta za učenje IT tehnologija je {drugaVarijabla}</p>
      <p>{prvaVarijabla} {drugaVarijabla}</p>
    </div>
  );
}

export default App;
