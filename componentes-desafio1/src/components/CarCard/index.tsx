

import './styles.css';
import carImg from '../../assets/car-card.png';

export default function CarCard() {
    return(
        <div className="dsct-car-container">
            <img src={carImg} alt="Car" />
            <h3>Lorem ipsum dolor</h3>
        </div>
    );
}