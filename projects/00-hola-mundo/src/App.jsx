import './App.css'
export function App() {
  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img className='tw-followCard-avatar' src="/src/assets/img/fede.jpg" alt="Avatar de fede" />
        <div className='tw-followCard-info'>
          <strong>Federico Díaz</strong>
          <span className='tw-followCard-infoUserName'>@Fede11092000</span>
        </div>
      </header>

      <aside>
        <button className='tw-followCard-button'>Seguir</button>
      </aside>
    </article>
  );
}
