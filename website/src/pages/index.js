import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

import Project from '../components/project';
import Feature from '../components/feature';
import TechSprint from '../components/techsprints';

import { features } from '../components/feature-config';
import { projects } from '../components/project-config';
import { techsprints } from '../components/techsprints-config';

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.tagline}`}>
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 style={{visibility: 'hidden'}} className="hero__title">{siteConfig.title}</h1>
          <img src={useBaseUrl('/img/air-logo-reverse-rbg.png')}/>
          <p className={classnames('hero--subtitle')}>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={'https://regulationinnovation.org/'}>
              Learn More
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        {techsprints && techsprints.length && (
          <section className={styles.members}>
            <div className="container">
              <div className="row row--center">
                <h2>Featured TechSprints</h2>
              </div>
              <div className="row">
                {techsprints.map((props, idx) => (
                  <TechSprint key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;