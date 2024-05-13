import Image from 'next/image'
import IconPDF from '@assets/icons/pdf.svg'

export const ReportPreviewView = () => {
  return (
    <div className='border-dotted border-l-2'>
      {/* プレビュー部分のヘッダー */}
      <div className='bg-gray-200 p-4 flex justify-between'>
        <div className='bg-gray-800 rounded-lg p-2'>
          <p className='text-white font-bold'>Preview</p>
        </div>
        <div>
          <Image
            src={IconPDF}
            alt='icon-PDF'
            width={40}
            height={40}
          />
          <img />
        </div>
      </div>

      {/* プレビュー本体 */}
      <div className='p-4'>
        {/* ゼミレポのヘッダー */}
        <div className='flex justify-between items-center mb-4'>
          <div>
            <p className='font-bold'>FACULTY OF SYSTEM ENGINEERING</p>
            <p className='font-bold'>WAKAYAMA UNIVERSITY</p>
          </div>
          <div>
            <p className='font-bold underline underline-offset-4'>No.100</p>
          </div>
        </div>

        {/* タイトルとか */}
        <div className='grid grid-rows-2 grid-cols-5 mb-6'>
          <div className='relative h-16 col-span-3 border-2 border-black flex flex-col justify-center'>
            <p className='absolute top-1 left-1'>TITLE</p>
            <p className='text-center text-2xl'>レポートタイトル</p>
          </div>

          <div className='relative h-16 col-span-1 border-2 border-black -ml-[1px] flex flex-col justify-center'>
            <p className='absolute top-1 left-1'>REPORT No.</p>
            <p className='mr-2 text-right text-2xl'>123</p>
          </div>

          <div className='relative h-16 col-span-1 border-2 border-black -ml-[1px] flex flex-col justify-center'>
            <p className='absolute top-1 left-1'>TOTAL</p>
            <p className='mr-2 text-right text-2xl'>1/1</p>
          </div>

          <div className='relative h-16 col-span-2 border-2 border-black -mt-[1px] flex flex-col justify-center'>
            <p className='absolute top-1 left-1'>AUTHOR</p>
            <p className='text-center text-2xl'>Name</p>
          </div>

          <div className='relative h-16 col-span-1 border-2 border-black -ml-[1px] -mt-[1px] flex flex-col justify-center'>
            <p className='absolute top-1 left-1'>POSITION</p>
            <p className='mr-2 text-right text-2xl'>Lab</p>
          </div>

          <div className='relative h-16 col-span-2 border-2 border-black -ml-[1px] -mt-[1px] flex flex-col justify-center'>
            <p className='absolute top-1 left-1'>DATE</p>
            <p className='text-center text-2xl'>2024年4月1日</p>
          </div>
        </div>

        {/* レポートの本文 */}
        <div>
          <p className='text-2xl underline underline-offset-4'>1. はじめに</p>
          <p>ああああああああああああああああああああ</p>
          <p>ああああああああああああああああああああ</p>
          <p>ああああああああああああああああああああ</p>
        </div>
      </div>
    </div>
  )
}
