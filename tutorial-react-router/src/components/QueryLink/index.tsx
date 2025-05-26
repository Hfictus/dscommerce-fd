



import { NavLink, type NavLinkProps } from "react-router-dom";
import { useLocation } from "react-router-dom";

interface QueryLinkProps extends Omit<NavLinkProps, 'to'> {
    to: string;
}


export default function QueryLink( {to, ...props }: QueryLinkProps ) {
    const location = useLocation();
    return <NavLink to={to + location.search} {...props} />
}