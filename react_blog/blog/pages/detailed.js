import React from 'react';
import Head from 'next/head'
import { Row, Col, Breadcrumb } from 'antd'
import { CalendarOutlined,FolderOutlined,FireOutlined } from '@ant-design/icons'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'

import '../static/style/pages/detailed.css'

const Detailed = () => {
   return (
      <div>
         <Head>
            <title>博客详细页</title>
         </Head>
         <Header />
         <Row className="comm-main" type="flex" justify="center">
            <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
               <div>
                  <div className="bread-div">
                     <Breadcrumb>
                        <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                        <Breadcrumb.Item><a href="/">视频列表</a></Breadcrumb.Item>
                        <Breadcrumb.Item>xxxx</Breadcrumb.Item>
                     </Breadcrumb>
                  </div>
                  <div>
                     <div className="detailed-title">
                        React实战练习
                     </div>
                     <div className="list-icon center">
                        <span><CalendarOutlined />2020-09-11</span>
                        <span><FolderOutlined />视频教程</span>
                        <span><FireOutlined />7689</span>
                     </div>
                     <div className="detailed-content">
                        解析 markdown 内容
                     </div>
                  </div>
               </div>
            </Col>
            <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
               <Author />
               <Advert />
            </Col>
         </Row>

         <Footer />

      </div>
   )
}

export default Detailed