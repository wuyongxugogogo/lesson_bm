import { Tabs,Table,Button } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import axios from 'axios';
import './mock/data.js';

const { TabPane } = Tabs;

const columns = [
   {
      title: 'img',
      dataIndex: 'img',
      key: 'img',
      render: img => <img src={img}/>,
   },
   {
      title: 'title',
      dataIndex: 'title',
      key: 'title',
      render: (title, obj) => {
         // console.log(a, b, c)
         const percent = parseInt((obj.learnd/obj.lesson)*100);
         // console.log(percent)
         return (
            <div className="title">
               <h2>{title}</h2>
               共{obj.lesson}讲 | 已学{obj.learnd}讲 | 学完{percent}%
            </div>
         )
      }
   },
   {
      title: 'type',
      dataIndex: 'type',
      key: 'type',
      render: type => <h3>{type}</h3>,
   },
   {
      title: 'button',
      dataIndex: 'button',
      key: 'button',
      render: button => <Button type="primary">开始学习</Button>,
   },
];

// const data = [
//    {
//       key: '1',
//       name: '浏览器工作原理与实践',
//       age: '专栏',
//       address: <Button type="primary">开始学习</Button>,
//    },
// ];

class Tab extends React.Component {
   constructor(){
      super();
      this.state = {
         course:[],
         allCourse: [],
         course1:[],
         course2:[]
      }
   }

   componentDidMount(){
      axios.get('/course')
      .then(res=>{
         this.setState({
            course: res.data.course,
            allCourse: res.data.course,
            course1: res.data.course,
            course2: res.data.course
         })
      })
   }

   progress(key){
      // console.log(this.state.allCourse)
      const allcourse = this.state.allCourse;
      const unlearnd = allcourse.filter((index)=>{
         const percent = parseInt((index.learnd/index.lesson)*100);
         if(percent < 50){
            return index
         }
      })
      const learnd = allcourse.filter((index)=>{
         const percent = parseInt((index.learnd/index.lesson)*100);
         if(percent >= 50){
            return index
         }
      })
      if(key == 1){
         this.setState({
            course1: allcourse
         })
      }else if(key == 2){
         this.setState({
            course1: unlearnd
         })
      }else{
         this.setState({
            course1: learnd
         })
      }
   }

   filter2(key){
      const allcourse = this.state.allCourse;
      const one = allcourse.filter((index)=>{
         if(index.key2 < 3){
            return index
         }
      })
      const two = allcourse.filter((index)=>{
         if(index.key2 >= 3 && index.key2 <5){
            return index
         }
      })
      const three = allcourse.filter((index)=>{
         if(index.key2 >= 5 &&index.key2 <7 ){
            return index
         }
      })
      const four = allcourse.filter((index)=>{
         if(index.key2 >= 7 &&index.key2 <9 ){
            return index
         }
      })
      const five = allcourse.filter((index)=>{
         if(index.key2 >= 9 &&index.key2 <11 ){
            return index
         }
      })
      if(key == 1){
         this.setState({
            course2:allcourse,
         })
      }else if(key == 2){
         this.setState({
            course2: one,
         })
      }else if(key == 3){
         this.setState({
            course2: two,
         })
      }else if(key == 4){
         this.setState({
            course2: three,
         })
      }else if(key == 5){
         this.setState({
            course2: four,
         })
      }else if(key == 6){
         this.setState({
            course2: five,
         })
      }
   }

   render() {
      const { size } = this.state;
      const { course1,course2,allCourse } = this.state;
      // console.log(course);
      let [cou1,cou2] = [[] , []];
      course1.forEach(i => cou1.push(i.key));
      course2.forEach(i => cou2.push(i.key));
      const afterFilter = cou1.filter(i => cou2.includes(i));
      const finalCourse = allCourse.filter(i => afterFilter.includes(i.key));

      return (
         <div>
            <h1>我的课程</h1>
            <Tabs defaultActiveKey="1" size={size} style={{ marginLeft: 16 }} onChange={this.progress.bind(this)}>
               <TabPane tab="全部" key="1" >
               </TabPane>
               <TabPane tab="未学完" key="2">
               </TabPane>
               <TabPane tab="已学完" key="3">
               </TabPane>
            </Tabs>
            <Tabs defaultActiveKey="1" type="card" size={size} onChange={this.filter2.bind(this)}>
               <TabPane tab="所有形式" key="1">
                  
               </TabPane>
               <TabPane tab="专栏" key="2">
                 
               </TabPane>
               <TabPane tab="视频课" key="3">
               
               </TabPane>
               <TabPane tab="微课" key="4">
               
               </TabPane>
               <TabPane tab="每日一课" key="5">
                 
               </TabPane>
               <TabPane tab="其他" key="6">
                 
               </TabPane>
            </Tabs>
            <Table columns={columns} dataSource={finalCourse} showHeader={false} />
         </div>
      );
   }
}

export default Tab;