import style from "@/styles/contact.module.css";
const Contact = () => {
  return (
    <div className={style.content} id="contact">
      <div className={style.container}>
        <div className={style.left_part}>
          <div className={style.heading}>
            <h1>Nous pouvons tirer le meilleur parti de ton potentiel.</h1>
          </div>
          <div className={style.description}>
            <p>
            Nous sommes déterminés à vous offrir un résultat exceptionnel<br /> avec une qualité irréprochable.
            </p>
          </div>
          <div className={style.btn}>
            <button>
            <a href="mailto:contact@warddstudio.com">Contactez nous</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
