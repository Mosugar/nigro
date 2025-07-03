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
                <svg width="33" height="17" viewBox="0 0 27.41 13.32">
                  <g>
                    <rect x="0" y="5.58" width="26.13" height="2.16" rx="1.08" ry="1.08" fill="currentColor"/>
                    <path d="M26.73,8.14c-1.99,1.65-3.98,3.29-5.97,4.94-.7.58-1.72.05-1.73-.91h0c0-.39.17-.75.47-.97,1.63-1.17,3.27-2.34,4.9-3.51.64-.46.64-1.48,0-1.93l-4.9-3.5c-.3-.21-.48-.58-.48-.97v-.14c0-.96,1.02-1.49,1.73-.91,1.99,1.64,3.98,3.29,5.97,4.93.91.75.91,2.22,0,2.97Z" fill="currentColor"/>
                  </g>
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