import React from 'react';
import Header from './Header';
import CardPizza from './CardPizza';
import imgNapolitana from '../assets/Napolitana.webp';
import imgEspañola from '../assets/Española.png';
import imgPeperoni from '../assets/Peperoni.jfif'

const Home = () => {
  return (
    <div>
      <Header />
      <main style={styles.container}>
       
        <CardPizza
          name="Napolitana"
          price={5950}
          ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
          img={imgNapolitana} 
        />
        <CardPizza
          name="Española"
          price={6950}
          ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
          img={imgEspañola}
        />
        <CardPizza
          name="Pepperoni"
          price={6950}
          ingredients={["mozzarella", "pepperoni", "orégano"]}
          img={imgPeperoni}
        />
      </main>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '20px',
    padding: '40px 20px',
    backgroundColor: '#f8f9fa'
  }
};


export default Home;
