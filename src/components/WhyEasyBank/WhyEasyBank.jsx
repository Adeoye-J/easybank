import React from 'react'
// import {online, budgeting, onboarding, api} from "../../images"
import online from "../../images/icon-online.svg"
import budgeting from "../../images/icon-budgeting.svg"
import onboarding from "../../images/icon-onboarding.svg"
import api from "../../images/icon-api.svg"
import "./whyEasyBank.css"


const WhyEasyBank = () => {

    const reasons = [
        {
            logo: <img src={online} alt="" />,
            header: "Online Banking",
            text: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
        },
        {
            logo: <img src={budgeting} alt="" />,
            header: "Simple Budgeting",
            text: "See exactly where your money goes each month. Receive notifications when you're close to your hitting limits."
        },
        {
            logo: <img src={onboarding} alt="" />,
            header: "Fast Onboarding",
            text: "We don't do branches. Open your account in minutes online and start taking control of yout finances right away."
        },
        {
            logo: <img src={api} alt="" />,
            header: "Open API",
            text: "Manage your savings, investments, pension and much more from one account. Tracking your money has never been easier."
        }
    ]

  return (
    <div className='easy-bank-container'>
        <div className="easy-bank-header">
            <h1>Why choose Easybank?</h1>
            <p>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
        </div>
        <div className='reasons-container'>
            {
                reasons.map((reason) => (
                    <div className='reason-container'>
                        <div>{reason.logo}</div>
                        <h1>{reason.header}</h1>
                        <p>{reason.text}</p>
                    </div>
                ))
            }
        </div>

    </div>
  )
}

export default WhyEasyBank