import styles from "./page.module.css";
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <header className={styles.headerContainer}>
        <div className={styles.headerDiv}>
          <h1 className={styles.headerH1}>Naufaldi</h1>
          <nav className={styles.nav}>
            <ul className={styles.headerUl}>
              <li className={styles.headerLi}>Home</li>
              <li className={styles.headerLi}>Mentorship</li>
              <li className={styles.headerLi}>Portfolio</li>
              <li className={styles.headerLi}>Snippet</li>
              <li className={styles.headerLi}>Blog</li>
            </ul>
          </nav>
        </div>
        <div className={styles.headerHr}>
          <hr className={styles.headerHr}/>
        </div>
      </header>
      <main className={styles.main}>
        <section className={styles.mainSection}>
          <h1 className={styles.sectionH1}>
            Hi Im Naufaldi, a special human with some ability to love learning
            and working on teamwork.
          </h1>
          <div className={styles.about}>
            <div className={styles.image}>
              <Image
                src="/perfil.png"
                width={160}
                height={160}
                alt="foto1"
              />
            </div>
            <div className={styles.biography}>
              <div>
                <h3 className={styles.sectionH3}>Biography</h3>
                <p className={styles.sectionP}>
                  Getting Buff +1 for learning, Buff +2 for documentation and 
                  more buff on managing team. Exicited on React, UX Research 
                  and Agile.
                </p>
              </div>
              <div className={styles.contact}>
                <h3 className={styles.sectionH3}>Lets connect</h3>
                <div className={styles.contacListItem}>
                  <div className={styles.contactIcon}> 
                    <Image
                      src="/facebook.png"
                      width={30}
                      height={30}
                      alt="foto2"
                    />
                  </div>
                  <div className={styles.contactIcon}>
                    <Image
                      src="/twiter.png"
                      width={30}
                      height={30}
                      alt="foto3"
                    />
                  </div>
                  <div className={styles.contactIcon}>
                    <Image
                      src="/instagram.png"
                      width={30}
                      height={30}
                      alt="foto4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h1>Oque eu faço</h1>
            <p>
              programo sites para empresas
              e para meus beneficios.
            </p>
          </div>         
          <div>
            <h1>Desenvolvimento web</h1>
            <p>
              Você receberá um personalizado
              planeje sua jornada de fitness,
              e muito apoio.
            </p>
          </div>
          <div>
            <h1>Pesquisa de experiência do usuário.</h1>
            <p>
              Você receberá um personalizado
              planeje sua jornada de fitness,
              e muito apoio.
            </p>
          </div>
        </section>
        <section>
          <h1 className={styles.featuredH1}>Featured Project</h1>
          
          <div className={styles.sectionContainer}>
            <div className={styles.sectionBox}></div>
            <div className={styles.sectionBoxItems}>
              <h3 className={styles.sectionBoxItemOne}>Web Development</h3>
              <h2 className={styles.sectionBoxItemTwo}>Border Landingpage</h2>
              <p className={styles.sectionBoxItemThree}>
                Serrow restructured and designed core pages, creating
                interactive elements that put users in control and allowed them
                to discover the information needed to make a decision
              </p>
            </div>
          </div>
          <div className={styles.sectionContainerTwo}>
            <div className={styles.sectionBoxTwo}></div>
            <div className={styles.sectionBoxItems}>
              <h3 className={styles.sectionBoxItemOne}>Desenvolvimento web</h3>
              <h2 className={styles.sectionBoxItemTwo}>Educação Kerja Mantul Gerenciamento</h2>
              <p className={styles.sectionBoxItemThree}>
                Serrow restructured and designed core pages, creating
                interactive elements that put users in control and allowed them
                to discover the information needed to make a decision.
              </p>
            </div>
          </div>
        </section>
        <section>
          <h1 className={styles.containerH1}>Code Snippet</h1>
          <div className={styles.container}>
            <div className={styles.containerBox}>
              <h3>Inicioador nextjs</h3>
              <p>Um projeto nextjs para um mero mortal.</p>
              <h5>8 estrelas</h5>
            </div>
            <div className={styles.containerBoxTwo}>
              <h3>Kit inicial frontal</h3>
              <p>
                um projeto extremamente simples para html 5 bolierplate.
                configuração incluída para minify css, html minify,
                configuração de SEO.
              </p>
              <h5>12 estrela</h5>
            </div>
          </div>
          <div className={styles.containerTwo}>
            <div className={styles.containerBoxThree}>
              <h3>Fragmento de código</h3>
              <p>Um projeto nextjs para um mero mortal.</p>
              <h5>8 estrelas</h5>
            </div>
            <div className={styles.containerBoxFour}>
              <h3>Kit inicial frontal</h3>
              <p>
                um projeto extremamente simples para html 5 bolierplate.
                configuração incluída para minify css, html minify,
                configuração de SEO.
              </p>
              <h5>12 estrelas</h5>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
