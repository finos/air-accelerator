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
            <div className={classnames(styles.featureCTA)}>
                <ul>
                    <li><a href={about.link}>{about.title}</a></li>
                </ul>
                <ul>
                    <li><a href={project.link}>{project.title}</a></li>
                </ul>
                <ul>
                    <li><a href={involved.link}>{involved.title}</a></li>
                </ul>
            </div>
        </div>
    );
}