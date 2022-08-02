import logo from 'assets/logo.svg';
import styles from './Item.module.scss';

export default function Item() {
  return (
    <div className={styles.item}>
      <div className={styles.item__imagem}>
        <img src={logo} alt="image" />
      </div>
      <div className={styles.item__descricao}>
        <div>
          <h2>Macarrão</h2>
          <p>Descrição Macarrão</p>
        </div>
        <div className={styles.item__tags}>
          <div className={styles.item__porcao}>400g</div>
          <div className={styles.item__qtdPessoas}>Serve 2 pessoas</div>
          <div className={styles.item__valor}>R$ 50,00</div>
        </div>
      </div>
    </div>
  );
}
