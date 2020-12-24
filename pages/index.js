import Head from 'next/head';
import Layout from '../components/Layout';
import styles from './css/index.module.css';

function Home() {
    return (
        <Layout Home>
            <Head>
                <title>FFOOD</title>
            </Head>
            <setion>
                <div id={styles.header}>
                    <img
                        src="/images/burguer-home.png"
                        className={styles.burguerHome}
                    />
                    <img 
                        src="/images/mobile-burguer-home.png"
                        className={styles.burguerHomeMobile}
                    />

                    <div className={styles.burguerInfo}>
                        <span className={styles.nickname}>devalmagno food</span>
                        <h1>FAST FOOD, para matar a sua fome num instante.</h1>
                        <span className={styles.burguerCall}>Não perca tempo, peça nossos hamburgueres
                        delicosos, e desfrute do melhor e mais rápido
                        restaurante fast-food da cidade.</span>
                        <button className={styles.button}>
                            PEDIR AGORA
                        </button>
                    </div>

                    <div className={styles.buttonTop}>
                        <button className={styles.button}>
                            PEDIR AGORA
                        </button>
                    </div>
                    <div className={styles.headerBar}></div>
                </div>

                <div id={styles.content}>
                    <div></div>
                    <div className={styles.burguerContainer}>
                        <img
                            src="/images/double-burguer1x.png"
                        />
                        <h4 className={styles.burguerName}>DOUBLE BURGUER ESPECIAL</h4>
                        <p className={styles.burguerDescription}>
                            Perfeito para quem faz academia, 
                            aquela dose dupla de proteina com 2 burguers.
                        </p>
                    </div>

                    <div className={styles.burguerContainer}>
                        <img
                            src="/images/extra-cheddar1x.png"
                        />
                        <h4 className={styles.burguerName}>EXTRA CHEDDAR ESPECIAL</h4>
                        <p className={styles.burguerDescription}>
                            Delicioso hamburguer com CHEDDAR, 
                            2 fátias de cheddar para você.
                        </p>
                    </div>
                    <div></div>
                </div>
            </setion>
        </Layout>
    );
}

export default Home;