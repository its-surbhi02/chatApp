import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img src="https://cdn0.iconfinder.com/data/icons/seo-web-4-1/128/Vigor_User-Avatar-Profile-Photo-01-256.png" alt="Tailwind Css chat-bubble components" />
            </div>
        </div>
        <div className={'chat-bubble text-white bg-blue-500 '}>Hi What's upp??</div>
        <div className='chat-footer  text-xs flex gap-1'>12:40</div>
    </div>
  )
}

export default Message