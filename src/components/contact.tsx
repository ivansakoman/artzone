const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="contact__wrapper">
          <h2 className="contact__title">Hallo, ArtZone hotline!</h2>
          <div className="contact__info">
            <div className="contact__info--data">
              <div>Matej Štetić</div>
              <div>0993317628</div>
              <div>info.artzonedesign@gmail.com</div>
              <div>Kantrovci 15, 34330 Velika</div>
            </div>
            <div className="contact__info--btn">
              <a
                className="contact__btn"
                href="mailto:info.artzonedesign@gmail.com"
              >
                Javi se!
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
