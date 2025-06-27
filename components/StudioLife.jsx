import style from "@/styles/studiolife.module.css";
import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";

const StudioLife = () => {
  const studioImages = [
        // { src: "/studiolife/1.JPG", alt: "Recording session" },
        // { src: "/studiolife/2.JPG", alt: "Artist in vocal booth" },
        // { src: "/studiolife/3.JPG", alt: "Mixing console" },
        // { src: "/studiolife/4.JPG", alt: "Producer working" },
        // { src: "/studiolife/5.JPG", alt: "Team collaboration" },
        // { src: "/studiolife/6.JPG", alt: "Live recording" },
        // { src: "/studiolife/7.JPG", alt: "Equipment setup" },
        // { src: "/studiolife/8.JPG", alt: "Artist performance" },
  ];

  useEffect(() => {
    gsap.to(`.${style.column}`, {
      y: (index) => (index % 2 === 0 ? -20 : 20),
      duration: 3,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true
    });
  }, []);

  return (
    <div className={style.content} id="studio-life">
      <div className={style.container}>
        <div className={style.imageGrid}>
          {studioImages.map((image, index) => (
            <div 
              key={index}
              className={`${style.imageCard} ${style.column} ${style[`col${index % 4 + 1}`]}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className={style.studioImage}
              />
              <div className={style.overlay}></div>
            </div>
          ))}
        </div>
        
        <div className={style.textContainer}>
          <div className={style.textContent}>
            <h1 className={style.heading}>Studio Life</h1>
            <div className={style.bottomRow}>
              <p className={style.description}>
                Découvrez l'univers créatif de Wardd Music à travers nos sessions d'enregistrement.
              </p>
              <button className={style.button}>
                <span>Voir plus</span>
                <div className={style.arrow}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudioLife;