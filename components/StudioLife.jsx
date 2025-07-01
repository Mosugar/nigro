import style from "@/styles/studiolife.module.css";
import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";

const StudioLife = () => {
  const studioImages = [
    { src: "/studiolife/2.JPG", alt: "Artist in vocal booth" },
    { src: "/studiolife/3.JPG", alt: "Mixing console" },
    { src: "/studiolife/4.JPG", alt: "Producer working" },
    { src: "/studiolife/5.JPG", alt: "Team collaboration" },
    { src: "/studiolife/6.JPG", alt: "Live recording" },
    { src: "/studiolife/7.JPG", alt: "Equipment setup" },
    { src: "/studiolife/8.JPG", alt: "Artist performance" },
    { src: "/studiolife/9.JPG", alt: "Artist performance" },
    { src: "/studiolife/10.JPG", alt: "Studio ambiance" },
    { src: "/studiolife/11.JPG", alt: "Creative workspace" },
    { src: "/studiolife/12.JPG", alt: "Studio equipment" },
    { src: "/studiolife/13.JPG", alt: "Recording session" },
    { src: "/studiolife/14.JPG", alt: "Artist collaboration" },
    { src: "/studiolife/15.JPG", alt: "Sound mixing" },
    { src: "/studiolife/16.JPG", alt: "Studio vibe" },
    { src: "/studiolife/17.JPG", alt: "Creative process" },
    { src: "/studiolife/18.JPG", alt: "Studio life" },
    { src: "/studiolife/19.JPG", alt: "Recording equipment" },
    { src: "/studiolife/20.JPG", alt: "Studio ambiance" }
    
  ];

  useEffect(() => {
    gsap.to(`.${style.column}`, {
      y: (index) => (index % 2 === 0 ? -80 : 20),
      duration: 4,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true
    });
  }, []);

  return (
    <>
      <div style={{ background: "#fff", padding: "50px 0" }}></div>
      <div className={style.content} id="studio-life">
        {/* Add SVG gradient at the top - same as bottom sections */}
        <div className={style.svg_top}>
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1599 71"
            fill="var(--white)"
          >
            <polygon points="0 0 1599 0 1599 71 0 0" />
          </svg>
        </div>
        
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
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className={style.overlay}></div>
              </div>
            ))}
          </div>
          
          <div className={style.textContainer}>
            <div className={style.textContent}>
              <div className={style.bottomRow}>
                <div className={style.leftContent}>
                  <h1 className={style.heading}>Studio Life</h1>
                  <p className={style.description}>
                    Le son, la vibe, le style. Vis l'expérience WARDDMUSIC
                  </p>
                </div>
              </div>
            </div>
            
            <a 
              href="https://www.instagram.com/warddmusic_/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={style.bottomButton}
            >
              <span>Enter IG</span> 
              <div className={style.arrow}>
                <svg width="80" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudioLife;