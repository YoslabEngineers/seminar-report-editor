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
import IconTitle from '@assets/icons/title.svg'
import IconReportNum from '@assets/icons/report_num.svg'
import IconPageNum from '@assets/icons/page_num.svg'
import IconDate from '@assets/icons/date.svg'

export const ReportEditorView = ({
  pageNumber,
  reportNumber,
  content,
  seminarDate,
  title,
}: {
  pageNumber: string
  reportNumber: string
  content: string
  seminarDate: string
  title: string
}) => {
  return (
    <>
      <div className='flex flex-col'>
        {/* エディター部分のヘッダー */}
        <div className='bg-gray-200 p-4'>
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
                value={title}
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
                value={reportNumber}
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
                value={pageNumber}
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
                value={seminarDate}
                name='report-date'
                className='w-full text-left pl-3'
              />
            </div>
          </div>

          {/* レポート入力部分 */}
          <div className='flex-grow'>
            <textarea
              name='report-area'
              className='w-full h-full bg-gray-100 overflow-hidden text-base'>
              {content}
            </textarea>
          </div>
        </div>
      </div>
    </>
  )
}
