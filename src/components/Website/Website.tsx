'use client';

import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';
import styles from './Website.module.css';

export default function Website() {
  const app = useRef(null);
  const scrollPrompt = useRef(null);
  const workExperience = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline()
        .fromTo(
          scrollPrompt.current,
          { y: 20, opacity: 0.6, ease: 'power2.in' },
          { y: 50, opacity: 1, duration: 1.5, ease: 'power2.out' },
        )
        .repeat(-1);
    }, app);
    return () => ctx.revert();
  });

  return (
    <main className={styles.htmlScreen}>
      <section className={styles.pageContainer}>
        <p>Hi there,</p>
        <p /> I&apos;m a software developer and I like exploring and creating
        cool things on web apps. Experienced with REST API development, Node.js,
        React, Next.js, Typescript and more, I&apos;m always learning and
        adopting new technologies. When I&apos;m not doing that, I&apos;m out
        there doing Muay Thai or Gym. Also a fellow Path of Exile enjoyer!
        <p />
        <b>Currently searching for my next gig.</b>
        <p ref={scrollPrompt}>Scroll down to see more</p>
      </section>
      <section className={styles.pageContainer}>
        <div ref={workExperience}>
          <h1>Work Experience</h1>
          <h3>2021 Nov - 2023 June</h3>
          <h2>Infosys/Spark</h2>
          <h4>Technical Associate/Frontend Developer</h4>
          <p>
            Responsible for the migration of existing an javascript repo into
            typescript for the convergence squad and our work led to a new
            chapter within Spark. Worked with Mapbox GL, typescript, next.js,
            react query and next-auth to create our &quot;ConvergEX&quot; web
            app for internal spark use. I handled the frontend logic and
            performance within the app whilst implementing designs from the UX
            team.
          </p>
        </div>

        <br />
        <h3>2021 February - 2021 July</h3>
        <h2>Mission Ready</h2>
        <h4>Agile Software Developer (AI & Cloud)</h4>
        <p>
          During this 6 month coding bootcamp, I was exposed to working
          collobaratively in a software developement team with UX designers in
          order to simulate a professional working environment. I used various
          technologies such as Docker and cloud computing services from AWS,
          Azure, Google cloud and IBM cloud. Also handled REST APIs and
          fullstack development in an agile environment.
        </p>
      </section>
      <section className={`${styles.pageContainer}`}>
        <h1>Download my CV here</h1>
        <iframe
          className={styles.cv}
          width="100%"
          height="100%"
          src="https://drive.google.com/file/d/1uToCYEh-bRXKlFleP1y-S0N-235UDhk4/preview"
        />
      </section>
    </main>
  );
}
