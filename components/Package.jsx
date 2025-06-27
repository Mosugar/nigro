"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import style from "@/styles/package.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);
const Package = () => {
  useEffect(() => {
    const animation = gsap.fromTo(
      ".pack__7gv9",
      {
        y: "100%",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".slider",
          start: "5% bottom",
          end: "bottom center",
          toggleActions: "restart none none reverse",
        },
      }
    );

    // Return a cleanup function to kill the animation and ScrollTrigger
    return () => {
      animation.kill();
    };
  }, []);
  const packs = [
    {
      pack: "Pack étudiant",
      email: "mailto:contact@warddstudio.com?subject=Pack%20Etudiant",
      features: [
        {
          feature: "Enregistrement",
        },
        {
          feature: "Mixage",
        },
        {
          feature: "Mastering",
        },
        {
          feature: "Shooting (Offert)",
        },
        {
          feature: "Contenu vidéo pour réseaux sociaux",
        },
      ],
      price: "700",
    },
{
  pack: "Pack basic",
  email: "mailto:contact@warddstudio.com?subject=Pack%20Basic",
  features: [
    {
      feature: "Enregistrement",
    },
    {
      feature: "Mixage",
    },
    {
      feature: "Mastering",
    },
    {
      feature: "Shooting (Offert)",
    },
    {
      feature: "Contenu vidéo pour réseaux sociaux",
      
    },
    
  ],
  price: "1000",
},
    
{
  pack: "Pack pro",
  email: "mailto:contact@warddstudio.com?subject=Pack%20Pro",
  features: [
    {
      feature: "Enregistrement",
    },
    {
      feature: "Mixage",
    },
    {
      feature: "Mastering",
    },
    {
      feature: "Instru non exclusif",
    },
    {
      feature: "Shooting (Offert)",
    },
    {
      feature: "Contenu vidéo pour réseaux sociaux",
    },
    
  ],
  price: "1500",
    },
{
  pack: "Pack Premium",
  email: "mailto:contact@warddstudio.com?subject=Pack%20Premium",
  features: [
    {
      feature: "Enregistrement",
    },
    {
      feature: "Mixage",
    },
    {
      feature: "Mastering",      
    },
    {
      feature: "Tuning vocal avancé",
    },
    {
      feature: "Shooting (offert)  ",
    },
    {
      feature: "Contenu vidéo pour réseaux sociaux",
    },
    
  ],
  price: "2500",
    },
  ];
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 4,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1200, min: 800 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 800, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <div className={style.content} id="package">
      <div className={style.container}>
        <div className={style.heading}>
          <h1>Choisis ton pack</h1>
        </div>
        <div className="slider">
          <Carousel
            responsive={responsive}
            draggable={true}
            customTransition="all .5s ease"
            ssr={true}
            removeArrowOnDeviceType={["tablet", "mobile"]}
          >
            {packs.map((pack, index) => (
              <div className={style.inner} key={index}>
                <div className={`${style.card} pack__7gv9 pack_card__${index + 1}`}>
                  <div className={style.card_top}>
                    <div className={style.packname}>
                      <h1>{pack.pack}</h1>
                    </div>
                    <div className={style.feature}>
                      <ul>
                        {pack.features.map((feature, index) => (
                          <li key={index}>
                            <span>◎</span>
                            {feature.feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className={style.card_bot}>
                    {/* <div className={style.price}>
                      <h1>
                        {pack.price} <span>DH</span>
                      </h1>
                    </div> */}
                    <div className={style.book}>
                      <a href={pack.email}>
                        <button>
                          <span>réservez </span>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
          {/* <div className={style.arrow}>
            <Image
              src={"/icons/arow-green.svg"}
              alt="arrow"
              width={200}
              height={200}
            />
          </div> */}
        </div>
      </div>
      {/* <div className={style.svg_top}>
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1599 71"
          fill="var(--dark)"
        >
          <polygon points="0 0 1599 0 1599 71 0 0" />
        </svg>
      </div> */}
    </div>
  );
};

export default Package;
