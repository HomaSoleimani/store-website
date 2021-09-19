import React, { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <footer>
        <div className="container mr-lg-2 row col-12 d-flex justify-content-lg-between align-items-lg-baseline">
          <section className="footer-about col-12 col-lg-5">
            <h5 id="about">درباره‌ی ما</h5>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
              و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای
              زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و
              متخصصان را می طلبد.
            </p>
          </section>
          <section className="footer-contact col-12 col-lg-3">
            <h5 id="contact">ارتباط با ما</h5>
            <address>
              <p className="footer-address">
                <i className="fa fa-map-marker" />
                آدرس:{" "}
                <span>
                  تهران، خیابان مطهری، خیابان میرزای شیرازی شمالی، کوچه دلاویز
                </span>
              </p>
              <p className="footer-phone">
                <i className="fa fa-phone" />
                تلفن:
                <a href="tel:+982177378901" dir="ltr" className="tel">
                  +21 77 37 89 01
                </a>
              </p>
              <p className="footer-email">
                <i className="fa fa-envelope-open" />
                ایمیل:{" "}
                <a href="mailto: homasoleymani78@gmail.com">
                  homasoleymani78@gmail.com
                </a>
              </p>
            </address>
          </section>
          <section className="footer-form col-12 col-lg-4">
            <form className="d-flex flex-column justify-content-center align-items-start align-items-lg-center">
              <textarea placeholder="انتقادات و پیشنهادات خود را با ما در میان بگذارید"></textarea>
              <input type="email" placeholder="ایمیل خود را وارد کنید" />
              <button type="submit" className="bttn btn-s">
                ارسال
              </button>
            </form>
          </section>
        </div>
        <div className="footer-social">
          <a href="#" className="facebook">
            <i className="fa fa-facebook" />
          </a>
          <a href="#" className="instagram">
            <i className="fa fa-instagram" />
          </a>
          <a href="#" className="linkedin">
            <i className="fa fa-linkedin" />
          </a>
        </div>
        <div className="footer-wave">
          <p className="copyright">&copy; Designed by Homa Soleimani</p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#42b4a7"
              fillOpacity="1"
              d="M0,128L30,122.7C60,117,120,107,180,117.3C240,128,300,160,360,176C420,192,480,192,540,170.7C600,149,660,107,720,112C780,117,840,171,900,165.3C960,160,1020,96,1080,85.3C1140,75,1200,117,1260,128C1320,139,1380,117,1410,106.7L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
            ></path>
          </svg>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
