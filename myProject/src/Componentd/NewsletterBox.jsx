import React from 'react'

function NewsletterBox() {
    const onSubmitHolder=(event)=>{
        event.preventDefault();
    }
    return (
        <div className='text-center'>
            <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off </p>
            <p className='text-gray-400 mt-3'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam laboriosam assumenda possimus cupiditate soluta perferendis dolore? Officiis cumque iste, nemo iusto delectus vel maxime libero illo perferendis quaerat fugit labore.</p>
            <form onSubmit={onSubmitHolder} className=' w-full sm:w-1/2 flex item-center gap-3 mx-auto my-6 border pl-3'>
                <input className='p-2 w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' required/>
                <button className=' bg-black text-white text-xs px-10' type='submit'>SUBSCRIBE</button>
            </form>
         </div>
    )
}

export default NewsletterBox
