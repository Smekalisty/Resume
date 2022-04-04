import React from 'react';
import styles from './Quote.module.css';
import Carousel from 'react-bootstrap/Carousel';

const Quote = (props) => {
    return (
        <div>
            <Carousel interval={100000} controls={false} variant='dark'>

                <Carousel.Item>
                    <div class='d-flex mb-5 align-items-center'>
                        <div class='flex-shrink-0'>
                            <img className={styles.circle} src={props.payload.person1} alt='vip person' />
                        </div>
                        <div class='flex-grow-1 ms-3'>
                            <h5>{props.payload.quote1}</h5>
                            <p />
                            <h5 className={styles.secondaryText}>{props.payload.name1}</h5>
                        </div>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div class='d-flex mb-5 align-items-center'>
                        <div class='flex-shrink-0'>
                            <img className={styles.circle} src={props.payload.person2} alt='vip person' />
                        </div>
                        <div class='flex-grow-1 ms-3'>
                            <h5>{props.payload.quote2}</h5>
                            <p />
                            <h5 className={styles.secondaryText}>{props.payload.name2}</h5>
                        </div>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div class='d-flex mb-5 align-items-center'>
                        <div class='flex-shrink-0'>
                            <img className={styles.circle} src={props.payload.person3} alt='vip person' />
                        </div>
                        <div class='flex-grow-1 ms-3'>
                            <h5>{props.payload.quote3}</h5>
                            <p />
                            <h5 className={styles.secondaryText}>{props.payload.name3}</h5>
                        </div>
                    </div>
                </Carousel.Item>

            </Carousel>
        </div>
    );
};

export default Quote;