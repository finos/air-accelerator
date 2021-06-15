import React from 'react';
import classnames from 'classnames';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from '../pages/styles.module.css';

export default function Feature({imageUrl, title, description, about, project, involved}) {
    const imgUrl = useBaseUrl(imageUrl);
    return (
        <div className={classnames('text--center col col--4 padding', styles.feature)}>
        {imgUrl && (
            <div>
            <img className={styles.featureImage} src={imgUrl} alt={title} />
            </div>
        )}
        <h3>{title}</h3>
        <p>{description}</p>
        <p className={classnames(styles.cta)}><a href={about.link}>{about.title}</a></p>
        <p className={classnames(styles.cta)}><a href={project.link}>{project.title}</a></p>
        <p className={classnames(styles.cta)}><a href={involved.link}>{involved.title}</a></p>
        </div>
    );
}