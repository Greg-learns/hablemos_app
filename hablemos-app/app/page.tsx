export default function Home() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f5f5dc',
      fontFamily: 'sans-serif',
      color: '#333'
    }}>
      <h1 style={{ fontSize: '3rem', color: '#b22222' }}>Bienvenido a Hablemos.AI</h1>
      <p>Pronto podrás conversar con tu tutor de español favorito.</p>
    </main>
  );
}