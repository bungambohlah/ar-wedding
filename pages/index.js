import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Img from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const useAudio = (url) => {
  const [audio, setAudio] = useState(null);
  const [playing, setPlaying] = useState(true);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    console.log(playing);
    const toggleMusic = async () =>
      playing ? await audio.play() : await audio.pause();

    if (audio) {
      toggleMusic();
    }
  }, [playing, audio]);

  useEffect(() => {
    if (!audio) {
      setAudio(new Audio(url));
    }
    if (audio) {
      audio.addEventListener("ended", () => setPlaying(false));
    }
    return () => {
      if (audio) {
        audio.removeEventListener("ended", () => setPlaying(false));
        setAudio(null);
      }
    };
  }, [audio, url]);

  return [playing, toggle];
};

export default function Home() {
  const [playing, toggle] = useAudio("/music/wedding.mp3");

  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>Wedding &mdash; Rianti & Afif</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Rianti & Afif Wedding Website" />
        <meta
          name="keywords"
          content="afif, rianti, wedding, nikah, kawin, nikahan, afif abdillah jusuf, rianti dwi lestari, akad, akad nikah, landing page, resepsi, resepsi nikah"
        />
        <meta name="author" content="afifjusuf.id" />

        {/* Facebook and Twitter integration */}
        <meta property="og:title" content="Wedding - Rianti & Afif" />
        <meta property="og:image" content="" />
        <meta property="og:url" content="https://afifjusuf.id/wedding" />
        <meta property="og:site_name" content="Rianti & Afif Wedding Website" />
        <meta
          property="og:description"
          content="Rianti & Afif Wedding Website"
        />
        <meta name="twitter:title" content="Wedding - Rianti & Afif" />
        <meta name="twitter:image" content="" />
        <meta name="twitter:url" content="https://afifjusuf.id/wedding" />
        <meta name="twitter:card" content="" />
      </Head>
      {/* // jQuery */}
      <Script strategy="beforeInteractive" src="/js/jquery.min.js"></Script>
      {/* // jQuery Easing */}
      <Script
        strategy="beforeInteractive"
        src="/js/jquery.easing.1.3.js"
      ></Script>
      {/* // Bootstrap */}
      <Script strategy="beforeInteractive" src="/js/bootstrap.min.js"></Script>
      {/* // Waypoints */}
      <Script
        strategy="beforeInteractive"
        src="/js/jquery.waypoints.min.js"
      ></Script>
      {/* // Carousel */}
      <Script
        strategy="beforeInteractive"
        src="/js/owl.carousel.min.js"
      ></Script>
      {/* // countTo */}
      <Script strategy="beforeInteractive" src="/js/jquery.countTo.js"></Script>

      {/* // Stellar */}
      <Script
        strategy="beforeInteractive"
        src="/js/jquery.stellar.min.js"
      ></Script>
      {/* // Magnific Popup */}
      <Script
        strategy="beforeInteractive"
        src="/js/jquery.magnific-popup.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/js/magnific-popup-options.js"
      ></Script>

      <Script
        strategy="beforeInteractive"
        src="/js/simplyCountdown.js"
      ></Script>
      {/* // Main */}
      <Script strategy="beforeInteractive" src="/js/main.js"></Script>
      <Script id="my-script">
        {`
        var d = new Date("2021-10-10");

        // default example
        simplyCountdown('.simply-countdown-one', {
            year: d.getFullYear(),
            month: d.getMonth() + 1,
            day: d.getDate()
        });

        //jQuery example
        $('#simply-countdown-losange').simplyCountdown({
            year: d.getFullYear(),
            month: d.getMonth() + 1,
            day: d.getDate(),
            enableUtc: false
        });`}
      </Script>

      <div className="fh5co-loader" />
      <div id="page">
        <header
          id="fh5co-header"
          className="fh5co-cover"
          role="banner"
          style={{ backgroundImage: "url(/images/img_bg_2.jpg)" }}
          data-stellar-background-ratio="0.5"
        >
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center">
                <div className="display-t">
                  <div
                    className="display-tc animate-box"
                    data-animate-effect="fadeIn"
                  >
                    <h1>Rianti &amp; Afif</h1>
                    <h2>Alhamdulillah, kita telah menikah</h2>
                    <div className="simply-countdown simply-countdown-one"></div>
                    <p>
                      <a href="#" className="btn btn-default btn-sm">
                        Save the date
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* pembukaan */}
        <div id="fh5co-couple">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
                <h2>{`Assalamu'alaikum`}</h2>
                <h3>بِسْــــــــــــــــــمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ</h3>
                <h3>Salam sejahtera bagi kita semua</h3>
                <h3>10 Oktober 2021</h3>
                <p>Acara resepsi pernikahan kami</p>
              </div>
            </div>
            <div className="couple-wrap animate-box">
              <div className="couple-half">
                <div className="groom">
                  <Img
                    src="/images/groom.jpg"
                    alt="groom"
                    className="img-responsive"
                    width="40"
                    height="40"
                    // layout="fill"
                  />
                </div>
                <div className="desc-groom">
                  <h3>Rianti Dwi Lestari</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove
                  </p>
                </div>
              </div>
              <p className="heart text-center">
                <i className="icon-heart2"></i>
              </p>
              <div className="couple-half">
                <div className="bride">
                  <Img
                    src="/images/bride.jpg"
                    alt="groom"
                    className="img-responsive"
                    width="40"
                    height="40"
                    // layout="fill"
                  />
                </div>
                <div className="desc-bride">
                  <h3>Afif Abdillah Jusuf</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* event */}
        <div
          id="fh5co-event"
          className="fh5co-bg"
          style={{ backgroundImage: "url(/images/img_bg_3.jpg)" }}
        >
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
                <span>Daftar Acara Kami</span>
                <h2>Acara Nikah</h2>
              </div>
            </div>
            <div className="row">
              <div className="display-t">
                <div className="display-tc">
                  <div className="col-md-10 col-md-offset-1">
                    <div className="col-md-6 col-sm-6 text-center">
                      <div className="event-wrap animate-box">
                        <h3>Akad Nikah</h3>
                        <div className="event-col">
                          <i className="icon-clock"></i>
                          <span>09:00 - 11:00 WIB</span>
                        </div>
                        <div className="event-col">
                          <i className="icon-calendar"></i>
                          <span>Kamis, 15 Juli 2021</span>
                        </div>
                        <p>
                          Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts. Separated they live in Bookmarksgrove
                          right at the coast of the Semantics, a large language
                          ocean.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 text-center">
                      <div className="event-wrap animate-box">
                        <h3>Resepsi</h3>
                        <div className="event-col">
                          <i className="icon-clock"></i>
                          <span>13:00 - 20:00 WIB</span>
                        </div>
                        <div className="event-col">
                          <i className="icon-calendar"></i>
                          <span>Minggu, 10 Oktober 2021</span>
                        </div>
                        <p>
                          Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts. Separated they live in Bookmarksgrove
                          right at the coast of the Semantics, a large language
                          ocean.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* couple story */}
        <div id="fh5co-couple-story">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
                <h2>Cerita Kami</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-md-offset-0">
                <ul className="timeline animate-box">
                  <li className="animate-box">
                    <div
                      className="timeline-badge"
                      style={{ backgroundImage: "url(/images/couple-1.jpg)" }}
                    ></div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h3 className="timeline-title">
                          Saat Jadi Teman Sekelas
                        </h3>
                        <span className="date">2012</span>
                      </div>
                      <div className="timeline-body">
                        <p>
                          Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts. Separated they live in Bookmarksgrove
                          right at the coast of the Semantics, a large language
                          ocean.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="timeline-inverted animate-box">
                    <div
                      className="timeline-badge"
                      style={{ backgroundImage: "url(/images/couple-2.jpg)" }}
                    ></div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h3 className="timeline-title">Ketemu Lagi</h3>
                        <span className="date">Desember 2017</span>
                      </div>
                      <div className="timeline-body">
                        <p>
                          Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts. Separated they live in Bookmarksgrove
                          right at the coast of the Semantics, a large language
                          ocean.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="animate-box">
                    <div
                      className="timeline-badge"
                      style={{ backgroundImage: "url(/images/couple-3.jpg)" }}
                    ></div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h3 className="timeline-title">Lamaran</h3>
                        <span className="date">20 Desember 2020</span>
                      </div>
                      <div className="timeline-body">
                        <p>
                          Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts. Separated they live in Bookmarksgrove
                          right at the coast of the Semantics, a large language
                          ocean.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="timeline-inverted animate-box">
                    <div
                      className="timeline-badge"
                      style={{ backgroundImage: "url(/images/couple-3.jpg)" }}
                    ></div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h3 className="timeline-title">Akad Nikah</h3>
                        <span className="date">15 Juli 2021</span>
                      </div>
                      <div className="timeline-body">
                        <p>
                          Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts. Separated they live in Bookmarksgrove
                          right at the coast of the Semantics, a large language
                          ocean.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Coming Soon (Ngenteni Post Wedding disik) */}
        <div id="fh5co-gallery" className="fh5co-section-gray">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
                <h2>Foto Foto</h2>
                <p>Coming Soon!</p>
                <p>(Ditunggu ya, kita belum foto post weddingnya)</p>
              </div>
            </div>
            {/* <div className="row row-bottom-padded-md">
              <div className="col-md-12">
                <ul id="fh5co-gallery-list">
                  <li
                    className="one-third animate-box"
                    data-animate-effect="fadeIn"
                    style={{ backgroundImage: "url(/images/gallery-1.jpg)" }}
                  >
                    <a href="images/gallery-1.jpg">
                      <div className="case-studies-summary">
                        <span>14 Photos</span>
                        <h2>Two Glas of Juice</h2>
                      </div>
                    </a>
                  </li>
                  <li
                    className="one-third animate-box"
                    data-animate-effect="fadeIn"
                    style={{ backgroundImage: "url(/images/gallery-2.jpg)" }}
                  >
                    <a href="#" className="color-2">
                      <div className="case-studies-summary">
                        <span>30 Photos</span>
                        <h2>Timer starts now!</h2>
                      </div>
                    </a>
                  </li>

                  <li
                    className="one-third animate-box"
                    data-animate-effect="fadeIn"
                    style={{ backgroundImage: "url(/images/gallery-3.jpg)" }}
                  >
                    <a href="#" className="color-3">
                      <div className="case-studies-summary">
                        <span>90 Photos</span>
                        <h2>Beautiful sunset</h2>
                      </div>
                    </a>
                  </li>
                  <li
                    className="one-third animate-box"
                    data-animate-effect="fadeIn"
                    style={{ backgroundIimage: "url(/images/gallery-4.jpg)" }}
                  >
                    <a href="#" className="color-4">
                      <div className="case-studies-summary">
                        <span>12 Photos</span>
                        <h2>{"Company's Conference Room"}</h2>
                      </div>
                    </a>
                  </li>

                  <li
                    className="one-third animate-box"
                    data-animate-effect="fadeIn"
                    style={{ backgroundIimage: "url(/images/gallery-5.jpg)" }}
                  >
                    <a href="#" className="color-3">
                      <div className="case-studies-summary">
                        <span>50 Photos</span>
                        <h2>Useful baskets</h2>
                      </div>
                    </a>
                  </li>
                  <li
                    className="one-third animate-box"
                    data-animate-effect="fadeIn"
                    style={{ backgroundIimage: "url(/images/gallery-5.jpg)" }}
                  >
                    <a href="#" className="color-4">
                      <div className="case-studies-summary">
                        <span>45 Photos</span>
                        <h2>Skater man in the road</h2>
                      </div>
                    </a>
                  </li>

                  <li
                    className="one-third animate-box"
                    data-animate-effect="fadeIn"
                    style={{ backgroundIimage: "url(/images/gallery-7.jpg)" }}
                  >
                    <a href="#" className="color-4">
                      <div className="case-studies-summary">
                        <span>35 Photos</span>
                        <h2>Two Glas of Juice</h2>
                      </div>
                    </a>
                  </li>

                  <li
                    className="one-third animate-box"
                    data-animate-effect="fadeIn"
                    style={{ backgroundIimage: "url(/images/gallery-8.jpg)" }}
                  >
                    <a href="#" className="color-5">
                      <div className="case-studies-summary">
                        <span>90 Photos</span>
                        <h2>Timer starts now!</h2>
                      </div>
                    </a>
                  </li>
                  <li
                    className="one-third animate-box"
                    data-animate-effect="fadeIn"
                    style={{ backgroundIimage: "url(/images/gallery-9.jpg)" }}
                  >
                    <a href="#" className="color-6">
                      <div className="case-studies-summary">
                        <span>56 Photos</span>
                        <h2>Beautiful sunset</h2>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
        </div>

        {/* countdown */}
        <div
          id="fh5co-counter"
          className="fh5co-bg fh5co-counter"
          style={{ backgroundIimage: "url(/images/img_bg_5.jpg)" }}
        >
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="display-t">
                <div className="display-tc">
                  <div className="col-md-6 col-sm-6 animate-box">
                    <div className="feature-center">
                      <span className="icon">
                        <i className="icon-users"></i>
                      </span>

                      <span
                        className="counter js-counter"
                        data-from="0"
                        data-to="450"
                        data-speed="5000"
                        data-refresh-interval="50"
                      >
                        1
                      </span>
                      <span className="counter-label">Perkiraan Undangan</span>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 animate-box">
                    <div className="feature-center">
                      <span className="icon">
                        <i className="icon-bowl"></i>
                      </span>

                      <span
                        className="counter js-counter"
                        data-from="0"
                        data-to="1000"
                        data-speed="5000"
                        data-refresh-interval="50"
                      >
                        1
                      </span>
                      <span className="counter-label">Perkiraan Catering</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* form attending */}
        <div
          id="fh5co-started"
          className="fh5co-bg"
          style={{ backgroundImage: "url(/images/img_bg_4.jpg)" }}
        >
          <div className="overlay"></div>
          <div className="container">
            <div className="row animate-box">
              <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                <h2>Sudah Datang?</h2>
                <p>
                  Silakan isi nama untuk nandain kalau kamu sudah datang ya
                  🥺👉👈
                </p>
                <p>Kalau bisa yang kasih nama lengkap biar gk bingung 😊</p>
              </div>
            </div>
            <div className="row animate-box">
              <div className="col-md-10 col-md-offset-1">
                <form className="form-inline">
                  <div className="col-md-6 col-sm-6">
                    <div className="form-group">
                      <label htmlFor="name" className="sr-only">
                        Name
                      </label>
                      <input
                        type="name"
                        className="form-control"
                        id="name"
                        placeholder="Nama kamu siapa?"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <button type="submit" className="btn btn-default btn-block">
                      Hadir ✋
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* footer */}
        <footer id="fh5co-footer" role="contentinfo">
          <div className="container">
            <div className="row copyright">
              <div className="col-md-12 text-center">
                <p>
                  <small className="block">
                    &copy; {new Date().getFullYear()} {""}
                    <Link href="https://afifjusuf.id" passHref>
                      <a>afifjusuf.id</a>
                    </Link>
                    . All Rights Reserved.
                  </small>
                  <small className="block">
                    Thanks for Design{" "}
                    <Link href="https://freehtml5.co/" passHref>
                      <a target="_blank" rel="noreferrer">
                        FREEHTML5.co
                      </a>
                    </Link>
                  </small>
                  <small className="block">
                    Thanks for Music{" "}
                    <Link href="https://youtu.be/_pR_cW4bDeE" passHref>
                      <a target="_blank" rel="noreferrer">
                        Ungu Feat. Andien - Saat Bahagia | VC Trinity
                      </a>
                    </Link>
                  </small>
                </p>
                <p>
                  <ul className="fh5co-social-icons">
                    <li>
                      <Link href="https://twitter.com/bungambohlah" passHref>
                        <a target="_blank" rel="noreferrer">
                          <i className="icon-twitter"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://instagr.am/afif.abdillah.j" passHref>
                        <a target="_blank" rel="noreferrer">
                          <i className="icon-instagram"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://fb.me/rudrafentje.samasamagila"
                        passHref
                      >
                        <a target="_blank" rel="noreferrer">
                          <i className="icon-facebook"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://linkedin.com/in/afifjusuf/" passHref>
                        <a target="_blank" rel="noreferrer">
                          <i className="icon-linkedin"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://youtube.com/channel/UCgXeikUYtBItdbE1_Lw9y1w"
                        passHref
                      >
                        <a target="_blank" rel="noreferrer">
                          <i className="icon-youtube"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://afifjusuf.id" passHref>
                        <a>
                          <i className="icon-globe2"></i>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </footer>

        {/* go to top button */}
        <div className="gototop js-top">
          <a href="#" className="js-gotop">
            <i className="icon-arrow-up"></i>
          </a>
        </div>

        {/* music button */}
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            left: "20px",
            zIndex: 999,
            opacity: 1,
            visibility: "visible",
            transition: "0.5s",
          }}
        >
          <button onClick={toggle}>
            {playing ? (
              <i className="icon-pause"></i>
            ) : (
              <i className="icon-play"></i>
            )}
          </button>
        </div>
      </div>
    </>
  );
}
