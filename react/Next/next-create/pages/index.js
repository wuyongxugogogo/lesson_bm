import React from 'react'
import Link from 'next/link'
import Router from 'next/router'

const Home = () => {
  // function gotoA(){
  //   Router.push('/jspangA')
  // }
  return (
    <>
      <div>我是首页</div>
      {/* <div><Link href="/jspangA"><a>去jspangA页面</a></Link></div>
      <div><Link href="/jspangB"><a>去jspangB页面</a></Link></div>
      <div>
        <button onClick={gotoA}>jspangA</button>
      </div> */}
      <div>
        <Link href="/xiaojiejie.js?name=小红"><a>小红</a></Link>
        <Link href="/xiaojiejie.js?name=小兰"><a>小兰</a></Link>
      </div>
    </>
  )
}

export default Home