import { MdEmail } from "react-icons/md";
import CustomButton from "../buttons/buttons";
import { FaPhoneAlt } from "react-icons/fa";
import styles from "./contactComponent.module.scss";
export default function ContactComponent(){
    return (
        <div className={styles.contactContainer}>
            <h3>.../Contact...</h3>
            <div className={styles.containerCaixa}>
                <div className={styles.containerSubCaixa}>
                    <div className={styles.subCaixa}>
                    <MdEmail/>
                    <p>Gabriel0917py@gmail.com</p>
                    </div>
                    <div className={styles.subCaixa}>
                    <FaPhoneAlt/>
                    <p>+55 021 97586-8540</p>
                    </div>
                </div>
                <CustomButton text="Download Curriculo" className={styles.buttonCurriculo}/>
            </div>
        </div>
    )
}