import React from 'react';

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div style={styles.card}>
   
      <img src={img} alt={name} style={styles.image} />
      <div style={styles.body}>
        <h3 style={styles.title}>{name}</h3>
        <hr style={styles.divider} />
        
        <p style={styles.ingredientLabel}>🍕 Ingredientes:</p>
        <p style={styles.ingredients}>
          {ingredients.join(', ')}
        </p>
        <hr style={styles.divider} />
        
        <p style={styles.price}>
          Precio: <strong>${price.toLocaleString('es-CL')}</strong>
        </p>
        
        <div style={styles.actions}>
          <button style={styles.btnMore}>Ver más 👀</button>
          <button style={styles.btnAdd}>Añadir 🛒</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    maxWidth: '350px',
    backgroundColor: '#fff',
    fontFamily: 'sans-serif',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover'
  },
  body: {
    padding: '20px',
    textAlign: 'center'
  },
  title: {
    margin: '0 0 10px 0',
    textAlign: 'left'
  },
  divider: {
    border: '0',
    borderTop: '1px solid #eee',
    margin: '15px 0'
  },
  ingredientLabel: {
    color: '#666',
    margin: '0 0 5px 0'
  },
  ingredients: {
    margin: '0',
    fontSize: '0.9rem',
    color: '#333'
  },
  price: {
    fontSize: '1.2rem',
    margin: '10px 0'
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '15px'
  },
  btnMore: {
    backgroundColor: 'white',
    border: '1px solid #333',
    padding: '8px 16px',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  btnAdd: {
    backgroundColor: '#212529',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};

export default CardPizza;

