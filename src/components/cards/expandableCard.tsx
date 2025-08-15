import { useState } from "react";
import CustomButton from "../buttons/buttons";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import styles from "./expandableCard.module.scss";

type ExpandableCardProps = {
  title: string;
  details: string;
};

export default function ExpandableCard({ title, details }: ExpandableCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`${styles.card} ${expanded ? styles.expanded : ""}`}>
      <section className={styles.detailsContainer}>
        <h3>{title}</h3>

        <CustomButton
          className={styles.smallButton}
          text={expanded ? <FaChevronUp /> : <FaChevronDown />}
          onClick={() => setExpanded(!expanded)}
        />
      </section>

      {expanded && (
        <div
          className={styles.details}
          dangerouslySetInnerHTML={{ __html: details }}
        />
      )}
    </div>
  );
}