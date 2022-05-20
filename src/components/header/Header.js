import classes from "./header.module.css";


export const Header = () => {
    return (
        <ul className={classes.header}>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contacts</a></li>
        </ul>
    )
}