import React from 'react'

export default function Single() {
  return (
    <div className='w-[19.4375rem] h-[45.125rem] md:w-[39.6875rem] md:h-[29.6875rem]'>
        <div className='first bg-white p-6'>
            <h1 className='text-[#2AB3B1] font-bold text-xl md:text-2xl'>Join our community</h1>
            <h2 className='text-[#C0DF33] font-normal mt-6 mb-4 md:text-lg'>30-day, hassle-free money back guarantee</h2>
            <p className='text-[#9AA7BE] text-sm leading-6 md:text-base md:mb-4'>Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.</p>
        </div>
        <div className='second bg-[#2AB3B1] flex flex-col md:flex-row text-white'>
        <div className='forth p-6 md:w-[100%] md:p-10'>
            <h1 className='font-bold text-lg mb-4'>Monthly Subscription</h1>
            <span className='text-[2rem] font-bold'>$29</span><span className='ml-4 opacity-50'>per month</span>
            <h2>Full access for less than $1 a day</h2>
            <button className='bg-[#C0DF33] px-24 py-3 mt-6 rounded-md'>SignUp</button>
        </div>
        <div className='third bg-[#4abfbd] p-6 md:w-[100%] md:p-10'> 
            <h1 className='font-bold text-lg mb-4'>Why Us</h1>
            <p className='text-sm font-normal'>Tutorials by industry experts<br/>Peer & expert code review<br/>Coding exercises<br/>Access to our GitHub repos<br/>Community forum<br/>Flashcard decks<br/>New videos every week</p>
        </div>
        </div>
    </div>
  )
}
