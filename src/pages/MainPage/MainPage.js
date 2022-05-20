import React from "react";
import classes from "./mainPage.module.css"


class News extends React.Component {
    render() {
        return (
            <div className={classes.div}>
                <h2 className={classes.h2}>Интересное</h2>
                <p>
                    Frontend — это клиентская часть продукта (интерфейс, с которым взаимодействует пользователь). В случае с сайтом, её формирует и выводит на экран браузер, который работает с HTML, CSS и JavaScript.
                </p>
                <p className={classes.more}>
                    <a href="#">подробнее...</a>
                </p>
                <p>
                    Backend — это внутренняя часть продукта, которая находится на сервере и скрыта от пользователей. Для её разработки могут использоваться самые разные языки, например, Python, PHP, Go, JavaScript, Java, С#.
                </p>
                <p className={classes.more}>
                    <a href="#">подробнее...</a>
                </p>
            </div>
        )
    }
}
export default News;