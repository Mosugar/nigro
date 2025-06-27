import style from "@/styles/team.module.css";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Team = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 800 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 800, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <div className={style.content} id="team">
      <div className={style.container}>
        <div className={style.heading}>
          <h1>Producteurs</h1>
        </div>
        <Carousel
          responsive={responsive}
          draggable={true}
          customTransition="all .5s ease"
          ssr={true}
          removeArrowOnDeviceType={['desktop','tablet', 'mobile']}
        >
         
            <div className={style.card}>
              <div className={style.picture}>
                <Image
                  src={"/images/aziz.jpg"}
                  alt="pic"
                  width={700}
                  height={700}
                />
              <div className={style.details}>
                <h3>Aziz El Asmai</h3>
                <span>Sound Engenier</span>
              </div>
              </div>
            </div>
              {/* <div className={style.card}>
                <div className={style.picture}>
                  <Image
                    src={"/images/Naoufal .JPG"}
                    alt="pic"
                    width={700}
                    height={700}
                  />
                <div className={style.details}>
                  <h3>Naoufal Lamrani</h3>
                  <span>Producer</span>
                </div>
                </div>
              </div> */}
            <div className={style.card}>
              <div className={style.picture}>
                <Image
                  src={"/images/imran.jpg"}
                  alt="pic"
                  width={700}
                  height={700}
                />
              <div className={style.details}>
                <h3>Imran El Fakyr</h3>
                <span>Producer</span>
              </div>
              </div>
            </div>
            
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
  );
};

export default Team;
