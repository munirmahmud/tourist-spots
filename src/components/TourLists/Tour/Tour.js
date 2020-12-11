import React, { Component } from 'react';
import { FaCaretSquareDown, FaWindowClose } from 'react-icons/fa';
import './tour.scss';

export default class Tour extends Component {
    render() {
        const {id, city, img, name, info} = this.props.tour;
        const { removeTour } = this.props.removeTour;
        
        return (
            <article className="tour">
                <div className="img__container">
                    <img src={img} alt={name} />
                
                    <span className="close__btn">
                        <FaWindowClose />
                    </span>
                </div>

                <div className="tour__info">
                    <h3>{city}</h3>
                    <h4>{name}</h4>
                    <h5>Info <FaCaretSquareDown className="icon__down" /></h5>

                    <p>{info}</p>
                </div>
                
            </article>
        )
    }
}
