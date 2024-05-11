import React from 'react'
import mockup from '../../images/image-mockups.png'
import "./requestInvite.css"

const RequestInvite = () => {
  return (
    <div className='request-invite-container'>
        <div className="request-invite-details">
            <div className="request-invite-image">
                <img src={mockup} alt="Mockup" width={"600px"} />
            </div>
            <div className="request-invite-content">
                <h1>Next generation digital banking</h1>
                <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                <button type='button'>Request Invite</button>
            </div>
        </div>
    </div>
  )
}

export default RequestInvite
