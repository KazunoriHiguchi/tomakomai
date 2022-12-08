import React from 'react'

const Lang = () => {
  return (
    <>
      <div className='m-auto h-auto w-11/12 my-4'>
        <div className='flex flex-wrap justify-center items-center bg-blue-100 h-auto rounded-3xl'>

          <div className='flex md:flex-row flex-col justify-between items-center  w-11/12 mt-4'>
            <h2 className=' md:text-lg text-base font-bold'>外国人の方はこちら</h2>
            <div className='md:w-auto w-full'>
              <ul className='flex justify-between'>
                <li className='block md:w-auto text-center w-1/4 md:px-2 px-1 md:mx-2 m-1 rounded-3xl md:text-sm text-xs font-medium bg-white'>ルビなし</li>
                <li className='block md:w-auto text-center w-1/4 md:px-2 px-1 md:mx-2 m-1 rounded-3xl md:text-sm text-xs font-medium bg-white'>ひらがな</li>
                <li className='block md:w-auto text-center w-1/4 md:px-2 px-1 md:mx-2 m-1 rounded-3xl md:text-sm text-xs font-medium bg-white'>カタカナ</li>
                <li className='block md:w-auto text-center w-1/4 md:px-2 px-1 md:mx-2 m-1 rounded-3xl md:text-sm text-xs font-medium bg-white'>ROMAN</li>
              </ul>
            </div>
          </div>

          <div className='m-1 p-1 bg-blue-200 md:w-1/5 w-5/12'>
            <p className='text-center font-medium text-xs'>日本語</p>
          </div>
          <div className='m-1 p-1 bg-blue-200 md:w-1/5 w-5/12'>
            <p className='text-center font-medium text-xs'>English/英語</p>
          </div>
          <div className='m-1 p-1 bg-blue-200 md:w-1/5 w-5/12'>
            <p className='text-center font-medium text-xs'>中文/中国語(繁体字)</p>
          </div>
          <div className='m-1 p-1 bg-blue-200 md:w-1/5 w-5/12'>
            <p className='text-center font-medium text-xs'>中文/中国語(簡体字)</p>
          </div>
          <div className='m-1 p-1 bg-blue-200 md:w-1/5 w-5/12'>
            <p className='text-center font-medium text-xs'>/韓国語</p>
          </div>
          <div className='m-1 p-1 bg-blue-200 md:w-1/5 w-5/12'>
            <p className='text-center font-medium text-xs'>/スペイン語</p>
          </div>
          <div className='m-1 p-1 bg-blue-200 md:w-1/5 w-5/12'>
            <p className='text-center font-medium text-xs'>/ポルトガル語</p>
          </div>
          <div className='m-1 p-1 bg-blue-200 md:w-1/5 w-5/12'>
            <p className='text-center font-medium text-xs'>/ベトナム語</p>
          </div>

        </div>
      </div>
    </>
  )
}

export default Lang