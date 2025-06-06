




import { useLocation, useNavigate, useParams } from "react-router-dom";
import { deleteInvoice, getInvoice } from "../../../data";

export default function Invoice() {
    
    const params = useParams();

    const location = useLocation();

    const invoice = getInvoice(Number(params.invoiceId));

    const navigate = useNavigate();

    return(
        <>
            {
                invoice &&
                <main style={{ padding: "1rem" }}>
                    <h2>Total Due: {invoice.amount}</h2>
                    <p>
                        {invoice.name}: {invoice.number}
                    </p>
                    <p>Due Data: {invoice.due}</p>
                    <p>
                        <button
                            onClick={() => {
                                deleteInvoice(invoice.number);
                                navigate("/invoices" + location.search);
                            }}
                        >
                            Delete
                        </button>
                    </p>
                </main>
            }
        </>
    ); 
}