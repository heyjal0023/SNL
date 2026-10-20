function App() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)',
        color: '#f9fafb',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div
        style={{
          padding: '2rem 3rem',
          borderRadius: '18px',
          background: 'rgba(17, 24, 39, 0.8)',
          border: '1px solid rgba(255,255,255,0.12)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.25)',
          textAlign: 'center',
        }}
      >
        <h1 style={{ margin: 0, fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
          I really like Saturday Night Live!
        </h1>
      </div>
    </main>
  )
}

export default App
