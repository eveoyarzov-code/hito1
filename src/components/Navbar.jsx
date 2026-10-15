import React from 'react';

const Navbar = () => {
  const total = 25000;
  const token = false; // Cambia a true para probar los otros botones

  return (
    <nav style={styles.nav}>
      <div style={styles.leftMenu}>
        <span style={styles.brand}>Pizzería Mamma Mía!</span>
        <button style={styles.button}>🍕 Home</button>
        
        {token ? (
          <>
            <button style={styles.button}>🔓 Profile</button>
            <button style={styles.button}>🔒 Logout</button>
          </>
        ) : (
          <>
            <button style={styles.button}>🔐 Login</button>
            <button style={styles.button}>🔐 Register</button>
          </>
        )}
      </div>
      <div>
        <button style={styles.totalButton}>
          🛒 Total: ${total.toLocaleString('es-CL')}
        </button>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#212529',
    padding: '10px 20px',
    color: 'white',
    fontFamily: 'sans-serif'
  },
  leftMenu: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  },
  brand: {
    fontWeight: 'bold',
    marginRight: '15px'
  },
  button: {
    backgroundColor: 'transparent',
    color: 'white',
    border: '1px solid white',
    padding: '6px 12px',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  totalButton: {
    backgroundColor: 'transparent',
    color: '#0dcaf0',
    border: '1px solid #0dcaf0',
    padding: '6px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold'
  }
};

export default Navbar;
