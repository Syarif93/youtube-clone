import { FC } from 'react'
import { BellIcon, MenuIcon, MicrophoneIcon, SearchIcon, VideoIcon } from '../utils/Icons'
import youtubeLogo from '../../images/youtube_logo.png'
import defaultImg from '../../images/default.png'

const Header: FC = () => {
  return (
    <header className='h-[55px] bg-white px-[25px]'>
      <div className='h-full flex items-center justify-between'>
        <div className='w-[230px]'>
          <div className='flex items-center'>
            <MenuIcon className='cursor-pointer mr-5' />
            <img className='h-[55px]' src={youtubeLogo} alt="Youtube Logo" />
          </div>
        </div>
        <div>
          <div className='flex items-center'>
            <input className='border focus:ring-blue-900 w-[540px] h-[38px]' type="search"  />
            <div className='border h-[38px] px-[20px] flex justify-center items-center cursor-pointer'>
              <SearchIcon w='18px' h='18px' className=''/>
            </div>
            <div className='h-[38px] w-[38px] flex justify-center items-center rounded-full bg-gray-100 ml-3'>
              <MicrophoneIcon />
            </div>
          </div>
        </div>
        <div className='flex items-center space-x-7'>
          <div className=''>
            <VideoIcon w='18px' h='18px' />
          </div>
          <div className=''>
            <BellIcon w='18px' h='18px' />
          </div>
          <div className='w-[28px] border rounded-full'>
            <img className='' src={defaultImg} alt="image" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header