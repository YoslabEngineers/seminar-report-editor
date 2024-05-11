import Image from 'next/image'
import IconBurger from '@assets/icons/burger.svg'
import IconSetting from '@assets/icons/settings.svg'
import IconLogout from '@assets/icons/logout.svg'

export const PageHeaderView = () => {
  return (
    <div className='w-full h-16 bg-gray-200 flex justify-between items-center'>
      <div className='mx-6'>
        <h1 className='text-2xl'>まーくだうんぜみれぽ</h1>
      </div>
      <div className='mx-6 flex gap-5'>
        <Image
          src={IconBurger}
          alt='burger'
        />
        <Image
          src={IconSetting}
          alt='setting'
        />
        <Image
          src={IconLogout}
          alt='logout'
        />
      </div>
    </div>
  )
}
