import React from 'react'
import TopInfo from '../../GlobalComponents/TopInfo'
import Hero from '../../GlobalComponents/HeroComponent'
import Title from '../../GlobalComponents/TitleComponent'
import Box from '../../GlobalComponents/BoxComponent'

// ---------------Images-------------------
import Hospital from "../../../images/hospital.jpg";
import Loading from "../../../images/Loading.png";


const Medical = () => {
  return (
    <>
      <TopInfo />
      <Hero type={"Medical CARE"} span={"-医療-"}/>
      <div className='flex md:flex-row flex-col justify-center md:items-start items-center w-auto  bg-gray-200 m-4 rounded-2xl'>

        <div className='flex flex-col justify-center items-center m-4 md:w-3/12 w-full '>
          <h1 className='w-full bg-blue-300 m-2 p-3 text-2xl text-center rounded-3xl'>健康・福祉</h1>
          <ul className='w-full md:text-left text-center'>
            <li className='border-b-4 bg-white border-gray-400 md:m-2 m-4 md:py-1 py-4 md:px-3 md:text-base text-xl rounded-xl'>子育て <br/><span className='text-sm'>{"(こそだて)"}</span></li>
            <li className='border-b-4 bg-white border-gray-400 md:m-2 m-4 md:py-1 py-4 md:px-3 md:text-base text-xl rounded-xl'>医療・福祉 <br/><span className='text-sm'>{"(いりょう・ふくし)"}</span></li>
            <li className='border-b-4 bg-white border-gray-400 md:m-2 m-4 md:py-1 py-4 md:px-3 md:text-base text-xl rounded-xl'>介護・高齢者福祉 <br/><span className='text-sm'>{"(かいご・こうれいしゃふくし)"}</span></li>
            <li className='border-b-4 bg-white border-gray-400 md:m-2 m-4 md:py-1 py-4 md:px-3 md:text-base text-xl rounded-xl'>地域福祉 <br/><span className='text-sm'>{"(ちいきふくし)"}</span></li>
            <li className='border-b-4 bg-white border-gray-400 md:m-2 m-4 md:py-1 py-4 md:px-3 md:text-base text-xl rounded-xl'>生活困窮者自立支援制度 <br/><span className='text-sm'>{"(せいかつこんきゅうしゃじりつしえんせいど)"}</span></li>
            <li className='border-b-4 bg-white border-gray-400 md:m-2 m-4 md:py-1 py-4 md:px-3 md:text-base text-xl rounded-xl'>障害者福祉 <br/><span className='text-sm'>{"(しょうがいしゃふくし)"}</span></li>
            <li className='border-b-4 bg-white border-gray-400 md:m-2 m-4 md:py-1 py-4 md:px-3 md:text-base text-xl rounded-xl'>休日当番病院 <br/><span className='text-sm'>{"(きゅうじつとうばんびょういん)"}</span></li>
            <li className='border-b-4 bg-white border-gray-400 md:m-2 m-4 md:py-1 py-4 md:px-3 md:text-base text-xl rounded-xl'>生活保護 <br/><span className='text-sm'>{"(せいかつほご)"}</span></li>
            <li className='border-b-4 bg-white border-gray-400 md:m-2 m-4 md:py-1 py-4 md:px-3 md:text-base text-xl rounded-xl'>社会福祉法人 <br/><span className='text-sm'>{"(しゃかいふくしほうじん)"}</span></li>
            <li className='border-b-4 bg-white border-gray-400 md:m-2 m-4 md:py-1 py-4 md:px-3 md:text-base text-xl rounded-xl'>苫小牧地区サポート <br/><span className='text-sm'>{"(とまこまいちくさぽーと)"}</span></li>
            <li className='border-b-4 bg-white border-gray-400 md:m-2 m-4 md:py-1 py-4 md:px-3 md:text-base text-xl rounded-xl'>関連団体・施設（リンク） <br/><span className='text-sm'>{"(かんれんだんたい・しせつ(りんく))"}</span></li>
          </ul>
        </div>

        <div className='flex flex-col justify-center items-center md:w-8/12 w-11/12'>

          <div className='flex flex-col justify-center items-start w-full m-4 bg-gray-50 rounded-3xl'>
            <h1 className='ml-5 m-3 text-lg font-bold'>
              新着情報
            </h1>
            <ul>
              <li className='ml-5 m-3'><span className='bg-blue-300 rounded-full p-1 text-xs '>＞</span>【新着】サンプルテキストです。文字数のために打ち込まれています。</li>
              <li className='ml-5 m-3'><span className='bg-blue-300 rounded-full p-1 text-xs '>＞</span>【新着】サンプルテキストです。文字数のために打ち込まれています。</li>
              <li className='ml-5 m-3'><span className='bg-blue-300 rounded-full p-1 text-xs '>＞</span>【新着】サンプルテキストです。文字数のために打ち込まれています。</li>
              <li className='ml-5 m-3'><span className='bg-blue-300 rounded-full p-1 text-xs '>＞</span>【新着】サンプルテキストです。文字数のために打ち込まれています。</li>
              <li className='ml-5 m-3'><span className='bg-blue-300 rounded-full p-1 text-xs '>＞</span>【新着】サンプルテキストです。文字数のために打ち込まれています。</li>
            </ul>

          </div>

          <div className='flex sm:flex-row flex-col justify-center items-start w-full '>

            <ul className='sm:w-6/12 w-full'>
              <li className='bg-blue-300 m-2 p-3 rounded-xl font-bold  ' >子育て<br/><span className='text-sm '>{"(こそだて)"}</span></li>
              <li className='bg-blue-300 m-2 p-3 rounded-xl font-bold  ' >介護・高齢者福祉<br/><span className='text-sm '>{"(かいご・ふくし)"}</span></li>
              <li className='bg-blue-300 m-2 p-3 rounded-xl font-bold  ' >地域福祉<br/><span className='text-sm '>{"(ちいきふくし)"}</span></li>
              <li className='bg-blue-300 m-2 p-3 rounded-xl font-bold  ' >障がい者福祉<br/><span className='text-sm '>{"(しょうがいしゃふくし)"}</span></li>
              <li className='bg-blue-300 m-2 p-3 rounded-xl font-bold  ' >生活保護<br/><span className='text-sm '>{"(せいかつほご)"}</span></li>
              <li className='bg-blue-300 m-2 p-3 rounded-xl font-bold mb-0 ' >苫小牧市サポート<br/><span className='text-sm '>{"(とまこまいしさぽーと)"}</span></li>
            </ul>

            <ul className='sm:w-6/12 w-full'>
              <li className='bg-blue-300 m-2 p-3 rounded-xl font-bold  ' >医療・福祉<br/><span className='text-sm '>{"(いりょう・ふくし)"}</span></li>
              <li className='bg-blue-300 m-2 p-3 rounded-xl font-bold  ' >ふくし総合相談<br/><span className='text-sm '>{"(ふくしそうごうそうだん)"}</span></li>
              <li className='bg-blue-300 m-2 p-3 rounded-xl font-bold  ' >生活困窮者自立支援制度<br/><span className='text-sm '>{"(せいかつこんきゅうしゃじりつしえんせいど)"}</span></li>
              <li className='bg-blue-300 m-2 p-3 rounded-xl font-bold  ' >休日当番病院<br/><span className='text-sm '>{"(きゅうじつとうばんびょういん)"}</span></li>
              <li className='bg-blue-300 m-2 p-3 rounded-xl font-bold  ' >社会福祉法人<br/><span className='text-sm '>{"(しゃかいふくしほうじん)"}</span></li>
              <li className='bg-blue-300 m-2 p-3 rounded-xl font-bold  ' >関連団体・施設（リンク）<br/><span className='text-sm '>{"(かんれんだんたい・しせつ(りんく))"}</span></li>
            </ul>

          </div>
        </div>
      </div>




    </>
  )
}

export default Medical