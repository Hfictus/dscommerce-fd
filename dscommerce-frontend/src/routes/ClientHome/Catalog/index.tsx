

import './styles.css';
import SearchBar from '../../../components/SearchBar';
import CatalogCard from '../../../components/CatalogCard';
import ButtonNextPage from '../../../components/ButtonNextPage';
import { ProductDTO } from '../../../models/product';

const product: ProductDTO = {
    id: 2,
    name: "Computador Gamer XT",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 5000.00,
    imgUrl: "http://localhost:5173/src/assets/computer.png",
    categories: [
        {
            id: 2,
            name: "Eletrônicos"
        },
        {
            id: 3,
            name: "Computadores"
        },
        {
            id: 4,
            name: "Importados"
        }
    ]
}

export default function Catalog() {
    return(
        <main>
            <section id="catalog-section" className="dsc-container">
                <SearchBar />
                <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
                    <CatalogCard product={product} />
                    <CatalogCard product={product} />
                    <CatalogCard product={product} />
                    <CatalogCard product={product} />
                    <CatalogCard product={product} />
                    <CatalogCard product={product} />
                    <CatalogCard product={product} />
                    <CatalogCard product={product} />
                    <CatalogCard product={product} />
                    <CatalogCard product={product} />
                    <CatalogCard product={product} />
                </div>
                <ButtonNextPage />
            </section>
        </main>
    );
}