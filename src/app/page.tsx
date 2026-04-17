export default function Home() {
  return (
    <div style={{ backgroundColor: '#fffbeb', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px', fontFamily: 'sans-serif' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '64px', marginBottom: '20px' }}>🌙</div>
        <h1 style={{ color: '#92400e', fontSize: '28px', marginBottom: '8px' }}>Les Aventures Spirituelles</h1>
        <h2 style={{ color: '#b45309', fontSize: '22px', marginBottom: '4px' }}>de Nawfel</h2>
        <p style={{ color: '#b45309', fontSize: '18px', marginBottom: '20px' }} dir="rtl">مغامرات نوفل الروحية</p>
        <p style={{ color: '#78716c', maxWidth: '400px', lineHeight: '1.6' }}>
          Un livre dont tu es le héros — Découvre le cheminement spirituel de Nawfel.
        </p>
        <div style={{ marginTop: '30px', padding: '14px 32px', backgroundColor: '#d97706', color: 'white', borderRadius: '12px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', border: 'none', boxShadow: '0 4px 14px rgba(217,119,6,0.3)' }}>
          Commencer l&apos;aventure ✨
        </div>
      </div>
      <div style={{ position: 'fixed', bottom: '0', width: '100%', padding: '12px', backgroundColor: '#fef3c7', borderTop: '1px solid #fde68a', textAlign: 'center' }}>
        <p style={{ fontSize: '10px', color: '#a8a29e' }}>Les Aventures Spirituelles de Nawfel — Basé sur les enseignements du Tassawuf</p>
      </div>
    </div>
  );
}
