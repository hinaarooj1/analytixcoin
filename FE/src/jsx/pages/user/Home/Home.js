import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './iko.css'
import './post.css'
// import './bootstrap.css'
import './iko-core.css'
import './iko-unit.css'
import './custom-frontend.css'
import './custom.css'
import './home-latest.css'
import './bootstrapNew.css'
import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Home.css";
import "./style.css";
import LogoNew from '../../../../assets/newlogo/logo.png'
import Ethan from '../../../../assets/images/ethan.jpg'
import Leo from '../../../../assets/images/leo.jpg'
import Lily from '../../../../assets/images/lily.jpg'
import Sophie from '../../../../assets/images/sophie.jpg'
import { useTranslation } from "react-i18next";
import franceflg from '../../../../assets/images/france.png'
import usflg from '../../../../assets/images/united-states.png'

const Home = () => {

  const sliderRef = useRef(null);
  const [openAccordion, setOpenAccordion] = useState(null);

  const [activeTab, setActiveTab] = useState(null);

  const toggleTab = (tabIndex) => {
    setActiveTab((prev) => (prev === tabIndex ? null : tabIndex));
  };
  // 
  const { i18n, t } = useTranslation();
  const [language, setLanguage] = useState(localStorage.getItem("language") || "en");

  useEffect(() => {
    i18n.changeLanguage(language); // Apply stored language
  }, [language, i18n]);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setIsOpen(false);
    localStorage.setItem("language", lang);
    i18n.changeLanguage(lang);
  };
  //  
  const [isOpen, setIsOpen] = useState(false); // State to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle dropdown visibility on click
  };



  // useEffect(() => {
  //   languages.forEach((lng) => {
  //     const img = new Image();
  //     img.src = lng.flag;
  //   });
  // }, []);
  // const changeLanguage = (lng) => {
  //   i18n.changeLanguage(lng);
  //   localStorage.setItem("selectedLanguage", lng);
  //   dispatch(setModal4({ isOpen: false, data: null }));
  // };
  // useEffect(() => {
  //   const savedLanguage = localStorage.getItem("selectedLanguage");
  //   if (savedLanguage && savedLanguage !== i18n.language) {
  //     setTimeout(() => {
  //       i18n.changeLanguage(savedLanguage);
  //     }, 100);
  //   }
  // }, [i18n]);

  // // Set Document Direction Based on Language
  // useEffect(() => {
  //   document.body.dir = i18n.dir();
  // }, [i18n, i18n.language]);


  window.addEventListener("scroll", function () {
    // let header = this.document.querySelector("#sticky-header");

    // header.classList.toggle("sticky-menu", window.scrollY > 150);
  });
  const faqData = [
    {
      id: 1,
      question: t("homePage.faq1Question"),
      answer: t("homePage.faq1Answer"),
    },
    {
      id: 2,
      question: t("homePage.faq2Question"),
      answer: t("homePage.faq2Answer"),
    },
    {
      id: 3,
      question: t("homePage.faq3Question"),
      answer: t("homePage.faq3Answer"),
    },
    {
      id: 4,
      question: t("homePage.faq4Question"),
      answer: t("homePage.faq4Answer"),
    },
    {
      id: 5,
      question: t("homePage.faq5Question"),
      answer: t("homePage.faq5Answer"),
    },
    {
      id: 6,
      question: t("homePage.faq6Question"),
      answer: t("homePage.faq6Answer"),
    },
  ];

  return (
    <div className="hompg homepaag">
      <div>
        <nav id="pr-nav" className="primary-menu navbar navbar-expand-lg navbar-dark nav-white-desktop">
          <div className="container-fluid primary-menu-inner px-0" >
            <div className="top-wrap" >
              <Link className="custom-logo-link" to="/" >
                <h5 className="m-0"><img style={{ width: "70px" }} src={LogoNew} alt="" /></h5>
              </Link>
            </div>
            <div style={{ display: 'flex', flexDirection: "row" }} className="collapse fldla navbar-collapse justify-content-end"   >

              {/* Language Selector */}
              <div className="language-dropdown">
                <button className="language-button" onClick={toggleDropdown}>
                  <img
                    src={language === "en" ? usflg : franceflg}
                    alt="Flag"
                    className="flag-icon"
                  />
                  {language === "en" ? "English" : "Français"}
                </button>
                {isOpen && (
                  <div className="language-dropdown-menu">
                    <button
                      onClick={() => handleLanguageChange("en")}
                      className="language-option"
                    >
                      <img src={usflg} alt="English" className="flag-icon" />
                      English
                    </button>
                    <button
                      onClick={() => handleLanguageChange("fr")}
                      className="language-option"
                    >
                      <img src={franceflg} alt="French" className="flag-icon" />
                      Français
                    </button>
                  </div>
                )}
              </div>
              <div className="header-cta nnmmn" ><a target="_blank" href="https://drive.google.com/file/d/1yWZRBbKgCrJ6YRF7viWYzBeNUf9zqPbw/view?usp=sharing"  >
                <div className="d-inline-block elementor-button-link elementor-button elementor-size-md" >Download Windows App</div>
              </a></div>
              <div className="header-cta" ><Link to="/auth/login"  >
                <div className="d-inline-block elementor-button-link elementor-button elementor-size-md" >{t("homePage.signin")} </div>
              </Link></div>
            </div>
          </div>
        </nav>
        <main id="site-content" className="flex-grow-1 nav-white-desktop" role="main">
          <article className="post-23310 page type-page status-publish hentry" id="post-23310">
            <div className="post-inner" >
              <header className="entry-header header-group">
                <div className="entry-header-inner" >
                </div>{/* .entry-header-inner */}
              </header>{/* .entry-header */}
              <div className="entry-content clearfix" >
                <div data-elementor-type="wp-page" data-elementor-id={23310} className="elementor elementor-23310" >
                  <section className="elementor-section elementor-top-section elementor-element elementor-element-aa23c9b elementor-reverse-tablet elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="aa23c9b" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                    <div className="elementor-background-overlay" />
                    <div className="elementor-container elementor-column-gap-custom" >
                      <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-7cfe8d4 animated fadeIn" data-id="7cfe8d4" data-element_type="column" data-settings="{&quot;animation&quot;:&quot;fadeIn&quot;,&quot;animation_delay&quot;:500}" >
                        <div className="elementor-widget-wrap elementor-element-populated" >

                          <div className="elementor-element elementor-element-b53c240 elementor-widget elementor-widget-text-editor" data-id="b53c240" data-element_type="widget" data-widget_type="text-editor.default" >
                            <div className="elementor-widget-container" >
                              {t("homePage.theUltimate")}  </div>
                          </div>
                          <div className="elementor-element elementor-element-bcb0398 elementor-widget elementor-widget-text-editor" data-id="bcb0398" data-element_type="widget" data-widget_type="text-editor.default" >
                            <div className="elementor-widget-container" >
                              {t("homePage.protectYour")}
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-2dcc85d elementor-tablet-align-center elementor-widget elementor-widget-button" data-id="2dcc85d" data-element_type="widget" data-widget_type="button.default" >
                            <div className="elementor-widget-container" >
                              <div className="elementor-button-wrapper" >
                                <Link className="elementor-button elementor-button-link elementor-size-xl elementor-animation-float" to="/auth/signup" >
                                  <span className="elementor-button-content-wrapper">
                                    <span className="elementor-button-text"> {t("homePage.startNow")}</span>
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                          <section className="elementor-section elementor-inner-section elementor-element elementor-element-2944cb3 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="2944cb3" data-element_type="section">
                            <div className="elementor-container elementor-column-gap-default" >

                            </div>
                          </section>
                        </div>
                      </div>
                      <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-1f98f87 animated fadeIn" data-id="1f98f87" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;fadeIn&quot;,&quot;animation_delay&quot;:0}" >
                        <div className="elementor-widget-wrap elementor-element-populated" >
                          <div className="elementor-element elementor-element-5301810 elementor-widget elementor-widget-image" data-id={5301810} data-element_type="widget" data-widget_type="image.default" >
                            <div className="elementor-widget-container" >
                              <img fetchpriority="high" decoding="async" width={498} height={1024} src="https://toka.peerduck.com/wp-content/uploads/2022/11/kebfrg-498x1024.png" className="attachment-large size-large wp-image-23315" alt srcSet="https://toka.peerduck.com/wp-content/uploads/2022/11/kebfrg-498x1024.png 498w, https://toka.peerduck.com/wp-content/uploads/2022/11/kebfrg-146x300.png 146w, https://toka.peerduck.com/wp-content/uploads/2022/11/kebfrg-768x1580.png 768w, https://toka.peerduck.com/wp-content/uploads/2022/11/kebfrg-747x1536.png 747w, https://toka.peerduck.com/wp-content/uploads/2022/11/kebfrg-600x1235.png 600w, https://toka.peerduck.com/wp-content/uploads/2022/11/kebfrg.png 834w" sizes="(max-width: 498px) 100vw, 498px" />
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="elementor-section elementor-top-section elementor-element elementor-element-a558b12 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="a558b12" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                    <div className="elementor-background-overlay" />
                    <div className="elementor-container elementor-column-gap-default" >
                      <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-bb7c5ff" data-id="bb7c5ff" data-element_type="column" >
                        <div className="elementor-widget-wrap elementor-element-populated" >
                          <section className="elementor-section elementor-inner-section elementor-element elementor-element-40b2f2a elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="40b2f2a" data-element_type="section">
                            <div className="elementor-container elementor-column-gap-default" >
                              <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-a6aec6c animated fadeIn" data-id="a6aec6c" data-element_type="column" data-settings="{&quot;animation&quot;:&quot;fadeIn&quot;,&quot;animation_delay&quot;:150}" >
                                <div className="elementor-widget-wrap elementor-element-populated" >
                                  <div className="elementor-element elementor-element-7bae0be elementor-widget__width-auto elementor-widget elementor-widget-image" data-id="7bae0be" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="image.default" >
                                    <div className="elementor-widget-container" >
                                      <img loading="lazy" decoding="async" width={947} height={1024} src="https://toka.peerduck.com/wp-content/uploads/2022/11/eiufvhef-947x1024.png" className="attachment-large size-large wp-image-23602" alt srcSet="https://toka.peerduck.com/wp-content/uploads/2022/11/eiufvhef-947x1024.png 947w, https://toka.peerduck.com/wp-content/uploads/2022/11/eiufvhef-277x300.png 277w, https://toka.peerduck.com/wp-content/uploads/2022/11/eiufvhef-768x830.png 768w, https://toka.peerduck.com/wp-content/uploads/2022/11/eiufvhef-1421x1536.png 1421w, https://toka.peerduck.com/wp-content/uploads/2022/11/eiufvhef-600x649.png 600w, https://toka.peerduck.com/wp-content/uploads/2022/11/eiufvhef.png 1501w" sizes="(max-width: 947px) 100vw, 947px" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-8b50d79 animated fadeIn" data-id="8b50d79" data-element_type="column" data-settings="{&quot;animation&quot;:&quot;fadeIn&quot;}" >
                                <div className="elementor-widget-wrap elementor-element-populated" >
                                  <div className="elementor-element elementor-element-eeeaa9b elementor-widget__width-auto elementor-widget elementor-widget-text-editor" data-id="eeeaa9b" data-element_type="widget" data-widget_type="text-editor.default" >
                                    <div className="elementor-widget-container" >

                                      {t("homePage.backedBy")}
                                    </div>
                                  </div>
                                  <div className="elementor-element elementor-element-cbf5029 elementor-widget-mobile__width-inherit elementor-widget elementor-widget-text-editor" data-id="cbf5029" data-element_type="widget" data-widget_type="text-editor.default" >
                                    <div className="elementor-widget-container" >
                                      {t("homePage.aTrustedPlatform")}

                                    </div>
                                  </div>
                                  <div className="elementor-element elementor-element-2304308 elementor-widget elementor-widget-text-editor" data-id={2304308} data-element_type="widget" data-widget_type="text-editor.default" >
                                    <div className="elementor-widget-container" >
                                      {t("homePage.offeringSecure")}

                                    </div>
                                  </div>

                                </div>
                              </div>
                            </div>
                          </section>
                          <section className="elementor-section elementor-inner-section elementor-element elementor-element-2822b86 elementor-reverse-tablet elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="2822b86" data-element_type="section">
                            <div className="elementor-container elementor-column-gap-default">
                              <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-a2a185f animated fadeIn" data-id="a2a185f" data-element_type="column" data-settings="{&quot;animation&quot;:&quot;fadeIn&quot;,&quot;animation_delay&quot;:200}">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div className="elementor-element elementor-element-509a20d elementor-widget__width-auto elementor-widget elementor-widget-text-editor" data-id="509a20d" data-element_type="widget" data-widget_type="text-editor.default">
                                    <div className="elementor-widget-container">
                                      {t("homePage.uncompromising")}
                                    </div>
                                  </div>
                                  <div className="elementor-element elementor-element-98160a8 elementor-widget-mobile__width-inherit elementor-widget elementor-widget-text-editor" data-id="98160a8" data-element_type="widget" data-widget_type="text-editor.default">
                                    <div className="elementor-widget-container">
                                      {t("homePage.backupSecurity")}
                                    </div>
                                  </div>
                                  <div className="elementor-element elementor-element-938b44e elementor-widget elementor-widget-text-editor" data-id="938b44e" data-element_type="widget" data-widget_type="text-editor.default">
                                    <div className="elementor-widget-container">
                                      {t("homePage.prioritizesSafety")}
                                    </div>
                                  </div>
                                  <div className="elementor-element elementor-element-c22a729 elementor-tablet-align-center elementor-widget elementor-widget-button" data-id="c22a729" data-element_type="widget" data-widget_type="button.default">
                                    <div className="elementor-widget-container">
                                      <div className="elementor-button-wrapper">
                                        <Link className="elementor-button elementor-button-link elementor-size-xl elementor-animation-float" to="/auth/signup">
                                          <span className="elementor-button-content-wrapper">
                                            <span className="elementor-button-text">{t("homePage.startNow")}</span>
                                          </span>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-6471cde animated fadeIn" data-id="6471cde" data-element_type="column" data-settings="{&quot;animation&quot;:&quot;fadeIn&quot;,&quot;background_background&quot;:&quot;classic&quot;}">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div className="elementor-element elementor-element-386ebce elementor-widget__width-auto elementor-widget elementor-widget-image" data-id="386ebce" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="image.default">
                                    <div className="elementor-widget-container">
                                      <img loading="lazy" decoding="async" width={867} height={1024} src="https://toka.peerduck.com/wp-content/uploads/2022/11/eygfve-867x1024.png" className="attachment-large size-large wp-image-23422" alt srcSet="https://toka.peerduck.com/wp-content/uploads/2022/11/eygfve-867x1024.png 867w, https://toka.peerduck.com/wp-content/uploads/2022/11/eygfve-254x300.png 254w, https://toka.peerduck.com/wp-content/uploads/2022/11/eygfve-768x907.png 768w, https://toka.peerduck.com/wp-content/uploads/2022/11/eygfve-600x709.png 600w, https://toka.peerduck.com/wp-content/uploads/2022/11/eygfve.png 1200w" sizes="(max-width: 867px) 100vw, 867px" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>

                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="elementor-section elementor-top-section elementor-element elementor-element-d8647f7 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="d8647f7" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                    <div className="elementor-background-overlay" />
                    <div className="elementor-container elementor-column-gap-default" >
                      <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-84fb7ba" data-id="84fb7ba" data-element_type="column" >
                        <div className="elementor-widget-wrap elementor-element-populated" >
                          <section className="elementor-section elementor-inner-section elementor-element elementor-element-51fcf7f elementor-section-boxed elementor-section-height-default elementor-section-height-default animated fadeIn" data-id="51fcf7f" data-element_type="section" data-settings="{&quot;animation&quot;:&quot;fadeIn&quot;,&quot;animation_delay&quot;:100}">
                            <div className="elementor-container elementor-column-gap-no">
                              <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-ced4232" data-id="ced4232" data-element_type="column">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div className="elementor-element elementor-element-965343f elementor-widget__width-auto elementor-widget elementor-widget-text-editor" data-id="965343f" data-element_type="widget" data-widget_type="text-editor.default">
                                    <div className="elementor-widget-container">
                                      {t("homePage.mainFeatures")}
                                    </div>
                                  </div>
                                  <div className="elementor-element elementor-element-0c882c7 elementor-widget-mobile__width-inherit elementor-widget elementor-widget-heading" data-id="0c882c7" data-element_type="widget" data-widget_type="heading.default">
                                    <div className="elementor-widget-container">
                                      <h2 className="elementor-heading-title elementor-size-default">
                                        {t("homePage.newGenerationWallet")}
                                      </h2>
                                    </div>
                                  </div>
                                  <div className="elementor-element elementor-element-270179f elementor-widget elementor-widget-text-editor" data-id="270179f" data-element_type="widget" data-widget_type="text-editor.default">
                                    <div className="elementor-widget-container">
                                      {t("homePage.experienceSecurity")}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>

                          <section className="elementor-section elementor-inner-section elementor-element elementor-element-1eb3ef6 elementor-section-full_width elementor-section-height-default elementor-section-height-default animated fadeIn" data-id="1eb3ef6" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;gradient&quot;,&quot;animation&quot;:&quot;fadeIn&quot;,&quot;animation_delay&quot;:100}">
                            <div className="elementor-container elementor-column-gap-default" >
                              <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-c496e1d" data-id="c496e1d" data-element_type="column" >
                                <div className="elementor-widget-wrap elementor-element-populated" >
                                  <section className="elementor-section elementor-inner-section elementor-element elementor-element-e464b44 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="e464b44" data-element_type="section">
                                    <div className="elementor-container elementor-column-gap-default">
                                      {/* User-Friendly Design */}
                                      <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-ef5e75a" data-id="ef5e75a" data-element_type="column">
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                          <div className="elementor-element elementor-element-dcb275e elementor-position-left elementor-vertical-align-top elementor-widget elementor-widget-image-box" data-id="dcb275e" data-element_type="widget" data-widget_type="image-box.default">
                                            <div className="elementor-widget-container">
                                              <div className="elementor-image-box-wrapper">
                                                <figure className="elementor-image-box-img">
                                                  <img loading="lazy" decoding="async" width={160} height={160} src="https://toka.peerduck.com/wp-content/uploads/2022/11/ewfvrb.png" alt="" />
                                                </figure>
                                                <div className="elementor-image-box-content">
                                                  <span className="elementor-image-box-title">{t("homePage.features.userFriendly")}</span>
                                                  <p className="elementor-image-box-description">{t("homePage.features.userFriendlyDesc")}</p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* Top-Tier Security */}
                                      <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-c7b39fd" data-id="c7b39fd" data-element_type="column">
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                          <div className="elementor-element elementor-element-4289a80 elementor-position-left elementor-vertical-align-top elementor-widget elementor-widget-image-box" data-id="4289a80" data-element_type="widget" data-widget_type="image-box.default">
                                            <div className="elementor-widget-container">
                                              <div className="elementor-image-box-wrapper">
                                                <figure className="elementor-image-box-img">
                                                  <img loading="lazy" decoding="async" width={160} height={160} src="https://toka.peerduck.com/wp-content/uploads/2022/11/ewfvrb.png" alt="" />
                                                </figure>
                                                <div className="elementor-image-box-content">
                                                  <span className="elementor-image-box-title">{t("homePage.features.security")}</span>
                                                  <p className="elementor-image-box-description">{t("homePage.features.securityDesc")}</p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* Password Protection */}
                                      <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-c806738" data-id="c806738" data-element_type="column">
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                          <div className="elementor-element elementor-element-d1347bb elementor-position-left elementor-vertical-align-top elementor-widget elementor-widget-image-box" data-id="d1347bb" data-element_type="widget" data-widget_type="image-box.default">
                                            <div className="elementor-widget-container">
                                              <div className="elementor-image-box-wrapper">
                                                <figure className="elementor-image-box-img">
                                                  <img loading="lazy" decoding="async" width={160} height={160} src="https://toka.peerduck.com/wp-content/uploads/2022/11/ewfvrb.png" alt="" />
                                                </figure>
                                                <div className="elementor-image-box-content">
                                                  <span className="elementor-image-box-title">{t("homePage.features.passwordProtection")}</span>
                                                  <p className="elementor-image-box-description">{t("homePage.features.passwordProtectionDesc")}</p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </section>


                                  <section
                                    className="elementor-section elementor-inner-section elementor-element elementor-element-1b5e8d8 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                    data-id="1b5e8d8"
                                    data-element_type="section"
                                  >
                                    <div className="elementor-container elementor-column-gap-default">
                                      <div
                                        className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-c1a0b28"
                                        data-id="c1a0b28"
                                        data-element_type="column"
                                      >
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                          <div
                                            className="elementor-element elementor-element-1d9315d elementor-position-left elementor-vertical-align-top elementor-widget elementor-widget-image-box"
                                            data-id="1d9315d"
                                            data-element_type="widget"
                                            data-widget_type="image-box.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="elementor-image-box-wrapper">
                                                <figure className="elementor-image-box-img">
                                                  <img
                                                    loading="lazy"
                                                    decoding="async"
                                                    width={160}
                                                    height={160}
                                                    src="https://toka.peerduck.com/wp-content/uploads/2022/11/ewfvrb.png"
                                                    className="attachment-full size-full wp-image-23481"
                                                    alt=""
                                                    srcSet="https://toka.peerduck.com/wp-content/uploads/2022/11/ewfvrb.png 160w, https://toka.peerduck.com/wp-content/uploads/2022/11/ewfvrb-150x150.png 150w, https://toka.peerduck.com/wp-content/uploads/2022/11/ewfvrb-100x100.png 100w"
                                                    sizes="(max-width: 160px) 100vw, 160px"
                                                  />
                                                </figure>
                                                <div className="elementor-image-box-content">
                                                  <span className="elementor-image-box-title">
                                                    {t("homePage.multiToken")}
                                                  </span>
                                                  <p className="elementor-image-box-description">
                                                    {t("homePage.multiTokenDescription")}
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div
                                        className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-d0a9de6"
                                        data-id="d0a9de6"
                                        data-element_type="column"
                                      >
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                          <div
                                            className="elementor-element elementor-element-5e983ee elementor-position-left elementor-vertical-align-top elementor-widget elementor-widget-image-box"
                                            data-id="5e983ee"
                                            data-element_type="widget"
                                            data-widget_type="image-box.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="elementor-image-box-wrapper">
                                                <figure className="elementor-image-box-img">
                                                  <img
                                                    loading="lazy"
                                                    decoding="async"
                                                    width={160}
                                                    height={160}
                                                    src="https://toka.peerduck.com/wp-content/uploads/2022/11/ewfvrb.png"
                                                    className="attachment-full size-full wp-image-23481"
                                                    alt=""
                                                    srcSet="https://toka.peerduck.com/wp-content/uploads/2022/11/ewfvrb.png 160w, https://toka.peerduck.com/wp-content/uploads/2022/11/ewfvrb-150x150.png 150w, https://toka.peerduck.com/wp-content/uploads/2022/11/ewfvrb-100x100.png 100w"
                                                    sizes="(max-width: 160px) 100vw, 160px"
                                                  />
                                                </figure>
                                                <div className="elementor-image-box-content">
                                                  <span className="elementor-image-box-title">
                                                    {t("homePage.unmatchedSafety")}
                                                  </span>
                                                  <p className="elementor-image-box-description">
                                                    {t("homePage.unmatchedSafetyDescription")}
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div
                                        className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-e47aa9c"
                                        data-id="e47aa9c"
                                        data-element_type="column"
                                      >
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                          <div
                                            className="elementor-element elementor-element-4c457de elementor-position-left elementor-vertical-align-top elementor-widget elementor-widget-image-box"
                                            data-id="4c457de"
                                            data-element_type="widget"
                                            data-widget_type="image-box.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="elementor-image-box-wrapper">
                                                <figure className="elementor-image-box-img">
                                                  <img
                                                    loading="lazy"
                                                    decoding="async"
                                                    width={160}
                                                    height={160}
                                                    src="https://toka.peerduck.com/wp-content/uploads/2022/11/ewfvrb.png"
                                                    className="attachment-full size-full wp-image-23481"
                                                    alt=""
                                                    srcSet="https://toka.peerduck.com/wp-content/uploads/2022/11/ewfvrb.png 160w, https://toka.peerduck.com/wp-content/uploads/2022/11/ewfvrb-150x150.png 150w, https://toka.peerduck.com/wp-content/uploads/2022/11/ewfvrb-100x100.png 100w"
                                                    sizes="(max-width: 160px) 100vw, 160px"
                                                  />
                                                </figure>
                                                <div className="elementor-image-box-content">
                                                  <span className="elementor-image-box-title">
                                                    {t("homePage.stakingPlus")}
                                                  </span>
                                                  <p className="elementor-image-box-description">
                                                    {t("homePage.stakingPlusDescription")}
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </section>

                                </div>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  </section>


                  <section className="elementor-section elementor-top-section elementor-element elementor-element-01dd347 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="01dd347" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                    <div className="elementor-background-overlay" />
                    <div className="elementor-container elementor-column-gap-default">
                      <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-d3dea06" data-id="d3dea06" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <section className="elementor-section elementor-inner-section elementor-element elementor-element-d862441 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="d862441" data-element_type="section">
                            <div className="elementor-container elementor-column-gap-default">
                              <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-678334d animated fadeIn" data-id="678334d" data-element_type="column" data-settings="{&quot;animation&quot;:&quot;fadeIn&quot;,&quot;animation_delay&quot;:200}">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div className="elementor-element elementor-element-4bde5b0 elementor-widget elementor-widget-image" data-id="4bde5b0" data-element_type="widget" data-widget_type="image.default">
                                    <div className="elementor-widget-container">
                                      <img loading="lazy" decoding="async" width={890} height={1024} src="https://toka.peerduck.com/wp-content/uploads/2022/11/efvhjef-890x1024.png" className="attachment-large size-large wp-image-23512" alt="" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-d32966a animated fadeIn" data-id="d32966a" data-element_type="column" data-settings="{&quot;animation&quot;:&quot;fadeIn&quot;}">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div className="elementor-element elementor-element-fad5859 elementor-widget__width-auto elementor-widget elementor-widget-text-editor" data-id="fad5859" data-element_type="widget" data-widget_type="text-editor.default">
                                    <div className="elementor-widget-container">
                                      {t("homePage.morePossibilities")}
                                    </div>
                                  </div>
                                  <div className="elementor-element elementor-element-49f092c elementor-widget-mobile__width-inherit elementor-widget elementor-widget-text-editor" data-id="49f092c" data-element_type="widget" data-widget_type="text-editor.default">
                                    <div className="elementor-widget-container">
                                      {t("homePage.stakeSwapTrade")}
                                    </div>
                                  </div>
                                  <div className="elementor-element elementor-element-1e475b5 elementor-widget elementor-widget-text-editor" data-id="1e475b5" data-element_type="widget" data-widget_type="text-editor.default">
                                    <div className="elementor-widget-container">
                                      {t("homePage.manageTradeGrow")}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <section className="elementor-section elementor-inner-section elementor-element elementor-element-78582c5 elementor-reverse-tablet elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="78582c5" data-element_type="section">
                            <div className="elementor-container elementor-column-gap-default">
                              <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-6a64521 animated fadeIn" data-id="6a64521" data-element_type="column" data-settings="{&quot;animation&quot;:&quot;fadeIn&quot;,&quot;animation_delay&quot;:200}">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div className="elementor-element elementor-element-5d8c7ca elementor-widget__width-auto elementor-widget elementor-widget-text-editor" data-id="5d8c7ca" data-element_type="widget" data-widget_type="text-editor.default">
                                    <div className="elementor-widget-container">
                                      {t("homePage.multiTokenSupport")}
                                    </div>
                                  </div>
                                  <div className="elementor-element elementor-element-b44c8e9 elementor-widget-mobile__width-inherit elementor-widget elementor-widget-text-editor" data-id="b44c8e9" data-element_type="widget" data-widget_type="text-editor.default">
                                    <div className="elementor-widget-container">
                                      {t("homePage.effortlessStorage")}
                                    </div>
                                  </div>
                                  <div className="elementor-element elementor-element-1130466 elementor-widget elementor-widget-text-editor" data-id="1130466" data-element_type="widget" data-widget_type="text-editor.default">
                                    <div className="elementor-widget-container">
                                      {t("homePage.bitcoinEthereumAltcoins")}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-191c4f9 animated fadeIn" data-id="191c4f9" data-element_type="column" data-settings="{&quot;animation&quot;:&quot;fadeIn&quot;,&quot;background_background&quot;:&quot;classic&quot;}">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div className="elementor-element elementor-element-745fb57 elementor-widget elementor-widget-image" data-id="745fb57" data-element_type="widget" data-widget_type="image.default">
                                    <div className="elementor-widget-container">
                                      <img loading="lazy" decoding="async" width={1024} height={797} src="https://toka.peerduck.com/wp-content/uploads/2022/11/t8gbhtg-1024x797.png" className="attachment-large size-large wp-image-23507" alt="" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section className="elementor-section elementor-top-section elementor-element elementor-element-9ed58fe elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="9ed58fe" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                    <div className="elementor-background-overlay" />
                    <div className="elementor-container elementor-column-gap-default" >
                      <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-2530493" data-id={2530493} data-element_type="column" >
                        <div className="elementor-widget-wrap elementor-element-populated" >
                          <section className="elementor-section elementor-inner-section elementor-element elementor-element-cfbacae elementor-section-boxed elementor-section-height-default elementor-section-height-default animated fadeIn" data-id="cfbacae" data-element_type="section" data-settings="{&quot;animation&quot;:&quot;fadeIn&quot;,&quot;animation_delay&quot;:100}">
                            <div className="elementor-container elementor-column-gap-no" >
                              <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-972db4f" data-id="972db4f" data-element_type="column" >
                                <div className="elementor-widget-wrap elementor-element-populated" >
                                  <div className="elementor-element elementor-element-57d7e81 elementor-widget__width-auto elementor-widget elementor-widget-text-editor" data-id="57d7e81" data-element_type="widget" data-widget_type="text-editor.default" >
                                    <div className="elementor-widget-container" >
                                      {t("homePage.faq")}
                                    </div>
                                  </div>
                                  <div className="elementor-element elementor-element-bac89af elementor-widget-mobile__width-inherit elementor-widget elementor-widget-heading" data-id="bac89af" data-element_type="widget" data-widget_type="heading.default" >
                                    <div className="elementor-widget-container" >
                                      <h2 className="elementor-heading-title elementor-size-default">
                                        {t("homePage.frequentlyAskedQuestions")}
                                      </h2>
                                    </div>
                                  </div>
                                  <div className="elementor-element elementor-element-101d19f elementor-widget elementor-widget-text-editor" data-id="101d19f" data-element_type="widget" data-widget_type="text-editor.default" >
                                    <div className="elementor-widget-container" >
                                      {t("homePage.checkOutOurFAQ")}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>

                          <section className="elementor-section elementor-inner-section elementor-element elementor-element-2c660bf elementor-section-boxed elementor-section-height-default elementor-section-height-default animated fadeIn" data-id="2c660bf" data-element_type="section" data-settings="{&quot;animation&quot;:&quot;fadeIn&quot;,&quot;animation_delay&quot;:100}">
                            <div className="elementor-container elementor-column-gap-default" >
                              <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-d8fc851" data-id="d8fc851" data-element_type="column" >
                                <div className="elementor-widget-wrap elementor-element-populated" >
                                  <div className="elementor-element elementor-element-615039f elementor-widget elementor-widget-toggle" data-id="615039f" data-element_type="widget" data-widget_type="toggle.default" >
                                    <div className="elementor-widget-container" >
                                      <div className="elementor-toggle">
                                        {faqData.map((item) => (
                                          <div className="elementor-toggle-item" key={item.id} onClick={() => toggleTab(item.id)}>
                                            <div id={`elementor-tab-title-${item.id}`} className="elementor-tab-title" data-tab={item.id} role="button" aria-controls={`elementor-tab-content-${item.id}`} aria-expanded={activeTab === item.id}>
                                              <span className="elementor-toggle-icon elementor-toggle-icon-right" aria-hidden="true">
                                                <span className={`elementor-toggle-icon-closed ${activeTab === item.id ? "rotatef" : "rotateaf"}`}>
                                                  <i className="fas fa-chevron-down" />
                                                </span>
                                              </span>
                                              <a className="elementor-toggle-title" tabIndex={0}>
                                                {item.question}
                                              </a>
                                            </div>
                                            <div id={`elementor-tab-content-${item.id}`} className={`elementor-tab-content elementor-clearfix ${activeTab === item.id ? "dblock" : "hidden"}`} data-tab={item.id} role="region" aria-labelledby={`elementor-tab-title-${item.id}`}>
                                              {item.answer}
                                            </div>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>

                          <section className="elementor-section elementor-inner-section elementor-element elementor-element-f0db96b elementor-section-boxed elementor-section-height-default elementor-section-height-default animated fadeIn" data-id="f0db96b" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;gradient&quot;,&quot;animation&quot;:&quot;fadeIn&quot;,&quot;animation_delay&quot;:150}">
                            <div className="elementor-background-overlay" />
                            <div className="elementor-container elementor-column-gap-default" >
                              <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-9bb5d4f" data-id="9bb5d4f" data-element_type="column" >
                                <div className="elementor-widget-wrap elementor-element-populated" >
                                  <div className="elementor-element elementor-element-774b677 elementor-widget elementor-widget-text-editor" data-id="774b677" data-element_type="widget" data-widget_type="text-editor.default" >
                                    <div className="elementor-widget-container" >
                                      {t("homePage.readyToTakeControl")}
                                    </div>
                                  </div>
                                  <div className="elementor-element elementor-element-9db2b7c elementor-widget elementor-widget-text-editor" data-id="9db2b7c" data-element_type="widget" data-widget_type="text-editor.default" >
                                    <div className="elementor-widget-container" >
                                      {t("homePage.tokaWalletDescription")}
                                    </div>
                                  </div>
                                  <div className="elementor-element elementor-element-c92040a elementor-tablet-align-center elementor-align-center elementor-widget elementor-widget-button" data-id="c92040a" data-element_type="widget" data-widget_type="button.default" >
                                    <div className="elementor-widget-container" >
                                      <div className="elementor-button-wrapper" >
                                        <Link className="elementor-button elementor-button-link elementor-size-xl elementor-animation-float" to="/auth/signup" >
                                          <span className="elementor-button-content-wrapper">
                                            <span className="elementor-button-text">{t("homePage.startNow")}</span>
                                          </span>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  </section>

                </div>
              </div>{/* .entry-content */}
            </div>{/* .post-inner */}
            <div className="section-inner clearfix" />{/* .section-inner */}
          </article>{/* .post */}
        </main>{/* #site-content */}
        <footer id="site-footer" className="nav-white-desktop" role="contentinfo">
          <div id="footer-wave" />
          <div className="footer-bg" >
            <div className="footer-inner container-xl" >
              <div className="footer-top" >
                <div className="row" >
                  <div className="ft-col-1 col-sm-12 col-lg-4" >
                    <div className="widget widget_text" >
                      <div className="widget-content" >
                        <div className="textwidget" >
                          <h4><img src={LogoNew} style={{ width: "80px" }} alt="" /></h4>

                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ft-col-2 col-sm-12 col-lg-4" >
                    <div className="widget widget_text" >
                      <div className="widget-content" >
                        <h4 className="widget-title">{t("homePage.contactUs")}</h4>
                        <div className="textwidget" >
                          <p>202 Helga Springs Rd, Crawford, TN 38554</p>
                          <p><a href="mailto:support@analytixcoin.com " >support@analytixcoin.com </a></p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="footer-bottom" >
                <div className="footer-credits" >
                  <p className="footer-copyright">Copyright ©2025 analytixcoin. All rights reserved.
                  </p>{/* .footer-copyright */}
                </div>{/* .footer-credits */}

              </div>{/* .footer-bottom  */}
            </div>{/* .footer-inner */}
          </div>
        </footer>{/* #site-footer */}
      </div>

    </div>

  );
};

export default Home;
