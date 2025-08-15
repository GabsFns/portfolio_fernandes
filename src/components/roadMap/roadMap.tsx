import styles from "./roadMap.module.scss";

export default function roadMap() {
  return (
    <div className={styles.containerRoad}>
      <div className={styles.containerText}>
        <div className={styles.circle1}></div>
        <div>
        <h4>Curso Profissionalizante de Informatica</h4><br />
        <p>DataMaster | 06/2020 - 06/2021</p>
        </div>
      </div>
      <hr />
      <div className={styles.containerText}>
         <div>
        <h4>Curso Técnico de Informática</h4><br />
        <p>FAETEC RJ | 03/2023 - 11/2024</p>
        </div>
        <div className={styles.circle2}></div>
      </div>
      <hr />
      <div className={styles.containerText}>
        <div className={styles.quad1}></div>
         <div>
        <h4>Fundamentos do Python 1 & 2 (PCAP) | (Cisco Networking Academy)</h4><br />
        <p></p>
        </div>
      </div>

      <hr className={styles.hrSpan} />

      <div className={styles.containerText}>
        <div className={styles.quad2}></div>
         <div>
        <h4>Programação Fundamentals Java (Oracle Academy)</h4><br />
        </div>
      </div>
      <hr />
      <div className={styles.containerText}>
        <div className={styles.circle3}></div>
         <div>
        <h4>Graduação Engenharia de Software</h4><br />
        <p>UVA - Universidade Veiga de Almeida</p><br />
        <p>02/2025 - Andamento</p>
        </div>
      </div>
      <hr />
      <div className={styles.containerText}>
         <div>
        <h4>Certificado de Liderança e Empreendedorismo</h4><br />
        <p>Universidade Veiga de Almeida (UVA)</p>
        </div>
        <div className={styles.quad3}></div>
      </div>
    </div>
  );
}
