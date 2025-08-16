import CustomButton from "../buttons/buttons";
import styles from "./footer.module.scss";

export default function footer(){
    return (
        <footer>
            <div className={styles.circle}></div>
            <article>
                <section className={styles.subAbaTitle}>
                    <h2 className={styles.title}>Gabriel</h2>
                    <div className={styles.subAba}>
                        <div className={styles.subAbaCargos}>
                            <p>Engenheiro de Software</p>
                            <p>DullStack Developer</p>
                            <p>Designer UI/UX</p>
                        </div>
                        <h2>Fernandes</h2>
                    </div>
                </section>
                <section className={styles.subAbaNav}>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Projects</li>
                    </ul>
                
                <form action="">
                </form>
                </section>
            </article>
            <div className={styles.subAbaFinalNav}>
                <CustomButton text="Example" className={styles.buttomNav}/>
                 <CustomButton text="Example" className={styles.buttomNav}/>
                  <CustomButton text="Example" className={styles.buttomNav}/>
                   <CustomButton text="Example" className={styles.buttomNav}/>
            </div>


        </footer>
    )
}