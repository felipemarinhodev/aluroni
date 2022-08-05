import menu from 'data/menu.json';
import styles from './Home.module.scss';

export default function Home() {
  let recommendedPlates = [...menu];
  recommendedPlates = recommendedPlates
    .sort(() => 0.5 - Math.random())
    .splice(0, 3);
  return (
    <section>
      <h3 className={styles.title}>Recomendações da cozinha</h3>
      <div className={styles.recommendeds}>
        {recommendedPlates.map((item) => (
          <div key={item.id} className="styles_recommendeds">
            <div className="styles_recommendeds__image">
              <img src={item.photo} alt={item.title} />
            </div>
            <button className={styles.recommended__button}>Ver mais</button>
          </div>
        ))}
      </div>
    </section>
  );
}
