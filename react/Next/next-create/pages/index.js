import React from 'react'
import Link from 'next/link'
import Router from 'next/router'

const Home = () => {
  // function gotoA(){
  //   Router.push('/jspangA')
  // }
  function gotoXiaojiejie() {
    Router.push({
      pathname: 'xiaojiejie',
      query: { name: '小兰' }
    })
  }
  return (
    <>
      <div>我是首页</div>
      {/* <div><Link href="/jspangA"><a>去jspangA页面</a></Link></div>
      <div><Link href="/jspangB"><a>去jspangB页面</a></Link></div>
      <div>
        <button onClick={gotoA}>jspangA</button>
      </div> */}
      <div>
        <Link href="/xiaojiejie?name=小红"><a>选择小红</a></Link>
        <br />
        <Link href="/xiaojiejie?name=小兰"><a>选择小兰</a></Link>
      </div>
      <div>
        <button onClick={gotoXiaojiejie}>选小兰</button>
      </div>
    </>
  )
}

export default Home