


import './styles.css';
import Header from '../../components/Header';
import CarCard from '../../components/CarCard';



export default function ProductShowcase() {
    return(
        <>
            <Header />
            <main>
                <section id="dsct-cars-section">
                    <h2>Venha nos visitar</h2>
                    <CarCard />
                    <CarCard />
                </section>
                <section id="dsct-messages-section">
                    <h2>O que estão dizendo</h2>

                </section>
            </main>
            
        </>
    );
}