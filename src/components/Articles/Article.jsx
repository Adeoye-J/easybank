import React from 'react'
import "./article.css"
import currency from "../../images/image-currency.jpg"
import restaurant from "../../images/image-restaurant.jpg"
import plane from "../../images/image-plane.jpg"
import confetti from "../../images/image-confetti.jpg"

const Article = () => {

    const compilation = [
        {
            image: <img src={currency} alt="Currency Image" />,
            author: "By Claire Robinson",
            title: "Receive money in any currency with no fees",
            text: "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single ..."
        },
        {
            image: <img src={restaurant} alt="Restaurant" />,
            author: "By Wilson Hutton",
            title: "Treat yourself without worrying about money",
            text: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ..."
        },
        {
            image: <img src={plane} alt="Plane" />,
            author: "By Wilson Hutton",
            title: "Take your Easybank card wherever you go",
            text: "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you ..."
        },
        {
            image: <img src={confetti} alt="Confetti" />,
            author: "By Claire Robinson",
            title: "Our invite-only Beta accounts are now live!",
            text: "After a lot of hard work by the whole team, we're excited to launch our closed beta. it's easy to request an invite through the site ..."
        }
    ]

    return (
        <div className='articles-container'>
            <h1>Latest Articles</h1>
            <div className="articles">
                {
                    compilation.map((comp) => (
                        <div className='article-container'>
                            <div className="image">{comp.image}</div>
                            <div className="article-content">
                                <h3>{comp.author}</h3>
                                <h1>{comp.title}</h1>
                                <p>{comp.text}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Article