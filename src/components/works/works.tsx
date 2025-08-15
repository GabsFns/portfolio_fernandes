
import styles from "./works.module.scss";

export default function works(){
const works = [
    {id: 1, year: "2025", yearTotal: "02/2025-Atualmente", title: "Impecavel LTDA", cargo: "Aprendiz de TI"}
]

    return (
        <>
        <section className={styles.containerPrincipalWork}>
        <h3 className={styles.worksTitle}>.../Works...</h3>
        {works.map((work) => (
             <div className={styles.containerWork} key={work.id}>
                <div className={styles.temp}>
                    <p>{work.year}</p>
                    <p>{work.yearTotal}</p>
                </div>
                <h3>{work.title}</h3>
                <h3>{work.cargo}</h3>
            </div>
        ))}
        </section>
        </>
        
    )
}