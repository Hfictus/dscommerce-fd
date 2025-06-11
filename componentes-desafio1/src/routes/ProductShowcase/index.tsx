


import './styles.css';
import Header from '../../components/Header';
import CarCard from '../../components/CarCard';
import MessageCard from '../../components/MessageCard';
import Footer from '../../components/Footer';



export default function ProductShowcase() {
    return(
        <>
            <Header />
            <main>
                <section id="dsct-cars-section">
                    <h2>Venha nos visitar</h2>
                    <div className="dsct-cards-car-container">
                        <CarCard />
                        <CarCard />
                    </div>
                </section>
                <section id="dsct-messages-section">
                    <h2>O que estão dizendo</h2>
                    <div className="dsct-cards-message-container">
                        <MessageCard />
                        <MessageCard />
                        <MessageCard />
                        <MessageCard />
                        <MessageCard />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}