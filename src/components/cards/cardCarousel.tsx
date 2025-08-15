import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./cardCarousel.module.scss";
import CustomButton from "../buttons/buttons";

export default function CardCarousel() {
  const cards = [
    { id: 1, title: "Card 1", text: "Conteúdo do card 1" },
    { id: 2, title: "Card 2", text: "Conteúdo do card 2" },
    { id: 3, title: "Card 3", text: "Conteúdo do card 3" },
    { id: 4, title: "Card 4", text: "Conteúdo do card 4" },
  ];

  // Função para atualizar opacidade e escala
  const updateSlides = (swiper: any) => {
    swiper.slides.forEach((slide: HTMLElement) => {
      const progress = slide.progress; // distância do centro
      const opacity = 1 - Math.min(Math.abs(progress) * 0.8, 0.8); // ajuste mínima opacidade
      const scale = 1 - Math.min(Math.abs(progress) * 0.05, 0.05); // ajuste escala
      slide.style.opacity = opacity.toString();
      slide.style.transform = `scale(${scale})`;
    });
  };

  return (
    <div className={styles["carousel-container"]}>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={2.1}
        centeredSlides={true}
        initialSlide={1}
        watchSlidesProgress={true}
        onSwiper={updateSlides}       // chamado na inicialização
        onSlideChange={updateSlides}  // chamado quando troca de slide
        onProgress={updateSlides}     // chamado durante o arraste
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div className={styles.card}>
              <nav>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <CustomButton text="Read More" variant="color-4" />
              </nav>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}