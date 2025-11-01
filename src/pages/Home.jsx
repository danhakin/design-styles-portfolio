import { Link } from 'react-router-dom';
import { designStyles } from '../data/designStyles';

const Home = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1>UI Design Styles Portfolio</h1>
      <p>
        Welcome to the Design Styles Portfolio - showcasing the same interface (DesignSync)
        implemented in 15 different design styles.
      </p>

      <div style={{ margin: '2rem 0', padding: '1.5rem', background: '#f0f0f0', borderRadius: '8px' }}>
        <h2>Try the Demo</h2>
        <p>
          Visit the <Link to="/demo" style={{ fontWeight: 'bold', color: '#0066cc' }}>DesignSync Demo</Link> to
          see the interface and switch between different design styles in real-time.
        </p>
      </div>

      <h2>Design Styles Included</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem', margin: '2rem 0' }}>
        {designStyles.map((style) => (
          <div
            key={style.id}
            style={{
              padding: '1rem',
              border: '1px solid #ddd',
              borderRadius: '8px',
              background: style.implemented ? '#e8f5e9' : '#fff',
            }}
          >
            <h3 style={{ marginTop: 0 }}>{style.name}</h3>
            <p style={{ fontSize: '0.9rem', color: '#666' }}>{style.description}</p>
            <div style={{ marginTop: '0.5rem' }}>
              {style.characteristics.map((char, index) => (
                <span
                  key={index}
                  style={{
                    display: 'inline-block',
                    padding: '0.25rem 0.5rem',
                    margin: '0.25rem',
                    fontSize: '0.75rem',
                    background: '#e0e0e0',
                    borderRadius: '4px',
                  }}
                >
                  {char}
                </span>
              ))}
            </div>
            {style.implemented && (
              <p style={{ marginTop: '0.5rem', color: '#2e7d32', fontWeight: 'bold', fontSize: '0.9rem' }}>
                ✓ Implemented
              </p>
            )}
          </div>
        ))}
      </div>

      <div style={{ marginTop: '3rem', padding: '1.5rem', background: '#fff3e0', borderRadius: '8px' }}>
        <h2>About This Project</h2>
        <p>
          This project demonstrates how visual design choices dramatically change the look and
          feel of an interface while maintaining identical functionality. Each style authentically
          represents its design philosophy, from Minimalism's simplicity to Maximalism's abundance.
        </p>
        <p>
          <Link to="/about" style={{ color: '#0066cc' }}>Learn more about this project →</Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
