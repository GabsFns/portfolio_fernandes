import styles from "./welcome.module.scss";
import CustomButton from "../buttons/buttons";
import SocialButton from "../buttons/social";
export default function welcomeCard() {
  const nameDev = "<Gabriel Fernandes/>";
  const welcomeDesc = "{Welcome to my Portfolio};";
  return (
    <main>
      <p className={styles.nameDev}>{nameDev}</p>
      <h1 className={styles.nameJob}>Software Enginner</h1>
      <h2>{welcomeDesc}</h2>
      <CustomButton text="View Projects" variant="color-3" />
      <nav>
        <SocialButton
          type="instagram"
          url="https://instagram.com/seuPerfil"
         
        />
        <SocialButton
          type="github"
          url="https://github.com/GabsFns"
        
        />
        <SocialButton
          type="linkedin"
          url="https://www.linkedin.com/in/gabriel-fernandes-2582b3274/"
          
        />
        <SocialButton
          type="behance"
          url="https://behance.net/seuPerfil"
          
        />
      </nav>
    </main>
  );
}
