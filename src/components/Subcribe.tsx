import React from 'react'

const Subcribe: React.FC = () => {
  return (
    <div className='w-full px-4 py-16 text-white bg-black text-center'>
      <h1>Join Our DeFi Community</h1>
      <div className='py-4'>
            <input className='p-3 rounded-xl mr-4'
            placeholder='Enter your email' type="email" />
            <button>Sign In</button>
      </div>
      <div className='flex items-center justify-center py-2'>
            <input className='mr-2' type="checkbox" />
            <label>Yes, I agree to receive email communications from DeFi.</label>
      </div>
    </div>
  )
}

export default Subcribe