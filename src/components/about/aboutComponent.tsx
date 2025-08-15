import ExpandableCard from "../cards/expandableCard";
import styles from "./aboutComponent.module.scss";
import RoadMap from "../roadMap/roadMap";
export default function about() {
  return (
    <div className={styles.container}>
      <h2>.../About Me...</h2>
      <section>
        <div className={styles.cardContainer}>
          <ExpandableCard
            title="Linguagens e ferramentas"
            details={`<p>void linguagens {<br/>
    Typescript / Javascript / Java / Php / Python / Kotlin
   <br/>}</p><br/> <br/>
  <p>void ferramentas {<br/>
    React Native / React / Angular / Nextjs / Nodejs / Fastifyjs / expressjs / Laravel / Spring Boot / JQuery / Figma / Swagger
  <br/>}</p>`}
          />
          <ExpandableCard
            title="Frameworks e Arquitetura"
            details="Aqui vai o conteúdo completo que aparece ao expandir"
          />
          <ExpandableCard
            title="DevOps e Padronização"
            details="Aqui vai o conteúdo completo que aparece ao expandir"
          />
        </div>
        <div className={styles.roadmapContainer}>
          <RoadMap/>
        </div>
      </section>
         
    </div>
  );
}
