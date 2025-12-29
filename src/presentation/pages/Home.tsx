import { useUserStore } from '../../core/store/useUserStore';
import Button from '../../shared/components/Button';

const Home = () => {
  // On "s'abonne" aux données dont on a besoin
  const { username, isLoggedIn, login, logout } = useUserStore();

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Gestion d'état avec Zustand</h1>
      
      {isLoggedIn ? (
        <div>
          <p>Bienvenue, <strong>{username}</strong> ! 👋</p>
          <Button variant="danger" onClick={logout}>Se déconnecter</Button>
        </div>
      ) : (
        <div>
          <p>Vous n'êtes pas connecté.</p>
          <Button variant="primary" onClick={() => login('Gassama')}>
            Se connecter en tant que Gassama
          </Button>
        </div>
      )}
    </div>
  );
};

export default Home;