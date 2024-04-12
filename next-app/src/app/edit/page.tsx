import Image from 'next/image'
import IconHash from '@assets/icons/hash.svg'
import IconB from '@assets/icons/bold.svg'
import IconI from '@assets/icons/italic.svg'
import IconU from '@assets/icons/underline.svg'
import IconS from '@assets/icons/strikethrough.svg'
import IconColor from '@assets/icons/color.svg'
import IconImage from '@assets/icons/image.svg'
import IconLink from '@assets/icons/link.svg'
import IconList from '@assets/icons/list.svg'
import IconNumList from '@assets/icons/num_list.svg'
import IconInline from '@assets/icons/inline.svg'
import IconBlockcode from '@assets/icons/blockcode.svg'

import IconBurger from '@assets/icons/burger.svg'
import IconSetting from '@assets/icons/settings.svg'
import IconLogout from '@assets/icons/logout.svg'

import IconTitle from '@assets/icons/title.svg'
import IconReportNum from '@assets/icons/report_num.svg'
import IconPageNum from '@assets/icons/page_num.svg'
import IconDate from '@assets/icons/date.svg'

import IconPDF from '@assets/icons/pdf.svg'
import IconArrow from '@assets/icons/arrow.svg'

export default function Edit() {
  return (
    <main className='w-full h-screen bg-white text-black flex flex-col items-center'>
      {/* ヘッダー */}
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

      {/* ページの本体部分 */}
      <div className='w-full h-full p-6'>
        <div className='w-full h-full grid grid-cols-2 justify-between gap-0 border-2 border-gray-300 rounded-lg overflow-hidden'>
          {/* エディター */}
          <div className='flex flex-col'>
            {/* エディター部分のヘッダー */}
            <div className='bg-gray-200 p-4 relative'>
              <div className='flex'>
                <div className='bg-gray-800 rounded-lg p-2'>
                  <p className='text-white font-bold'>Editor</p>
                </div>

                <div className='flex gap-1 overflow-x-auto'>
                  <Image
                    src={IconHash}
                    alt='icon-#'
                    width={40}
                    height={40}
                  />
                  <Image
                    src={IconB}
                    alt='icon-B'
                    width={40}
                    height={40}
                  />
                  <Image
                    src={IconI}
                    alt='icon-I'
                    width={40}
                    height={40}
                  />
                  <Image
                    src={IconU}
                    alt='icon-U'
                    width={40}
                    height={40}
                  />
                  <Image
                    src={IconS}
                    alt='icon-S'
                    width={40}
                    height={40}
                  />
                  <Image
                    src={IconColor}
                    alt='icon-Color'
                    width={40}
                    height={40}
                  />
                  <Image
                    src={IconImage}
                    alt='icon-Image'
                    width={40}
                    height={40}
                  />
                  <Image
                    src={IconLink}
                    alt='icon-Link'
                    width={40}
                    height={40}
                  />
                  <Image
                    src={IconList}
                    alt='icon-List'
                    width={40}
                    height={40}
                  />
                  <Image
                    src={IconNumList}
                    alt='icon-NumList'
                    width={40}
                    height={40}
                  />
                  <Image
                    src={IconInline}
                    alt='icon-inline'
                    width={40}
                    height={40}
                  />
                  <Image
                    src={IconBlockcode}
                    alt='icon-Blockcode'
                    width={40}
                    height={40}
                  />
                </div>
              </div>

              {/* エディターとプレビューの切り替え部分 */}
              <div className='absolute top-1/4 right-[-15px]'>
                <p className='text-3xl'>⇔</p>
              </div>
            </div>

            <div className='p-4 flex flex-col gap-3 flex-grow'>
              <div className='grid grid-rows-2 grid-cols-3 gap-1.5'>
                <div className='w-full col-span-3 flex border-2 border-gray-300 rounded-lg overflow-hidden'>
                  <label
                    htmlFor='report-title'
                    className='bg-gray-200 relative h-10 aspect-square'>
                    <Image
                      src={IconTitle}
                      alt='icon-Title'
                      fill={true}
                    />
                  </label>
                  <input
                    type='text'
                    value='レポートタイトル'
                    name='report-title'
                    className='w-full pl-3'
                  />
                </div>
                <div className='w-full col-span-1 flex border-2 border-gray-300 rounded-lg overflow-hidden'>
                  <label
                    htmlFor='report-number'
                    className='bg-gray-200 relative h-10 aspect-square'>
                    <Image
                      src={IconReportNum}
                      alt='icon-ReportNum'
                      fill={true}
                    />
                  </label>
                  <input
                    type='text'
                    value='123'
                    name='report-number'
                    className='w-full text-left pl-3'
                  />
                </div>
                <div className='w-full col-span-1 flex border-2 border-gray-300 rounded-lg overflow-hidden'>
                  <label
                    htmlFor='report-page-number'
                    className='bg-gray-200 relative h-10 aspect-square'>
                    <Image
                      src={IconPageNum}
                      alt='icon-ReportNum'
                      fill={true}
                    />
                  </label>
                  <input
                    type='text'
                    value='100'
                    name='report-page-number'
                    className='w-full text-left pl-3'
                  />
                </div>
                <div className='w-full col-span-1 flex border-2 border-gray-300 rounded-lg overflow-hidden'>
                  <label
                    htmlFor='report-date'
                    className='bg-gray-200 relative h-10 aspect-square'>
                    <Image
                      src={IconDate}
                      alt='icon-ReportNum'
                      fill={true}
                    />
                  </label>
                  <input
                    type='text'
                    value='2024/04/01'
                    name='report-date'
                    className='w-full text-left pl-3'
                  />
                </div>
              </div>

              {/* レポート入力部分 */}
              <div className='h-full my-3'>
                <textarea
                  name='report-area'
                  className='w-full h-full bg-gray-100 overflow-hidden text-base'>
                  レポート入力部分．．．
                </textarea>
              </div>
            </div>
          </div>

          {/* プレビュー */}
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
            <div className='p-4'>
              <p>1. はじめに</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
