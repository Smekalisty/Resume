import React from 'react';
import matrix from '../assets/header_matrix.jfif'
import photo from '../assets/header_photo.jfif'
import styles from './Header.module.css'

const Header = (props) => {
    return (
        <div>
            <img className={styles.cover} src={matrix} alt='cover' />

            <div className={styles.center}>
              <img className={styles.circle} src={photo} alt='user logo' />
            </div>

            <p />

            <div class='container'>
              <div class='shadow-lg p-3 mb-5 bg-body rounded'>
                <div>
              {/* one */}
              <h3>{props.payload.full_name}</h3>
              <div />

              <h5 className={styles.secondaryText}>{props.payload.age}</h5>
              <p />

              {/* two */}
              <h3>{props.payload.position}</h3>
              <div />

              <h5 className={styles.secondaryText}>{props.payload.country}</h5>
              <p />

              {/* three */}
              <h3>{props.payload.about}</h3>
              <div />

              <h5 className={styles.secondaryText}>{props.payload.description}</h5>
              <p />

              <a href={props.payload.github} target="_blank" rel="noreferrer">{props.payload.github}</a>
              <div />
              <a href={props.payload.linkedin} target="_blank" rel="noreferrer">{props.payload.linkedin}</a>
              <div />
              </div>
              </div>
            </div>
        </div>
    );
};

export default Header;