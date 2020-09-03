import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import Jspang from './jspang'

const Home = () => {
  // function gotoA(){
  //   Router.push('/jspangA')
  // }

  // routeChangeStart
  // routeChangeComplete
  // beforeHistoryChange
  // routeChangeError
  // hashChangeStart
  // hashChangeComplete
  Router.events.on('routeChangeStart',(...args)=>{
    console.log('1.routeChangeStart->路由开始变化，参数为：',...args)
  })
  Router.events.on('routeChangeComplete',(...args)=>{
    console.log('2.routeChangeComplete->路由变化结束，参数为：',...args)
  })
  Router.events.on('beforeHistoryChange',(...args)=>{
    console.log('3.beforeHistoryChange->路由变化结束，参数为：',...args)
  })
  Router.events.on('routeChangeError',(...args)=>{
    console.log('4.routeChangeError->路由发生错误，参数为：',...args)
  })
  Router.events.on('hashChangeStart',(...args)=>{
    console.log('5.hashChangeStart->参数为：',...args)
  })
  Router.events.on('hashChangeComplete',(...args)=>{
    console.log('6.hashChangeComplete->参数为：',...args)
  })
  

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

      <Jspang />
    </>
  )
}

export default Home