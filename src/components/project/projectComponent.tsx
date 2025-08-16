"use client";
import CustomButton from "../buttons/buttons";
import styles from "./projectComponent.module.scss";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectComponent() {
  const [activeButton, setActiveButton] = useState(1);

  type Card = { id: number; title: string; text: string };

  const cardsData: Record<number, Card[]> = {
    1: [
      { id: 1, title: "Card 1-1", text: "Conteúdo do card 1" },
      { id: 2, title: "Card 1-2", text: "Conteúdo do card 2" },
      { id: 3, title: "Card 1-3", text: "Conteúdo do card 3" },
      { id: 4, title: "Card 1-4", text: "Conteúdo do card 4" },
    ],
    2: [
      { id: 1, title: "Card 2-1", text: "Conteúdo do card 1" },
      { id: 2, title: "Card 2-2", text: "Conteúdo do card 2" },
      { id: 3, title: "Card 2-3", text: "Conteúdo do card 3" },
      { id: 4, title: "Card 2-4", text: "Conteúdo do card 4" },
    ],
    3: [
      { id: 1, title: "Card 3-1", text: "Conteúdo do card 1" },
      { id: 2, title: "Card 3-2", text: "Conteúdo do card 2" },
      { id: 3, title: "Card 3-3", text: "Conteúdo do card 3" },
      { id: 4, title: "Card 3-4", text: "Conteúdo do card 4" },
    ],
    4: [
      { id: 1, title: "Card 4-1", text: "Conteúdo do card 1" },
      { id: 2, title: "Card 4-2", text: "Conteúdo do card 2" },
      { id: 3, title: "Card 4-3", text: "Conteúdo do card 3" },
      { id: 4, title: "Card 4-4", text: "Conteúdo do card 4" },
    ],
  };

  return (
    <div className={styles.containerProjectPrincipal}>
      <h3 className={styles.titleProject}>.../Projects...</h3>

      <div className={styles.containerProject}>
        {/* Navegação animada */}
        <section className={styles.navContainer}>
          {[1, 2, 3, 4].map((num) => (
            <motion.div
              key={num}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <CustomButton
                text={num.toString()}
                variant={activeButton === num ? "color-1" : "color-4"}
                className={styles.NavProjects}
                onClick={() => setActiveButton(num)}
              />
            </motion.div>
          ))}
        </section>

        {/* Cards com transição suave no grupo inteiro */}
        <section className={styles.cardsContainer}>
          <AnimatePresence mode="wait">
  <motion.div
    key={activeButton}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4 }}
    className={styles.cardsContainer} // <- grid aplicado aqui
  >
    {cardsData[activeButton].map((card) => (
      <div key={card.id} className={styles.card}>
        <div>
          <h4>{card.title}</h4>
          <p>{card.text}</p>
        </div>
        <CustomButton text="view" className={styles.buttonCardView} />
      </div>
    ))}
  </motion.div>
</AnimatePresence>
        </section>
      </div>
    </div>
  );
}
