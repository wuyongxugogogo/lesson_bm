import { Avatar, Divider } from 'antd'
import '../static/style/components/author.css'
import {GithubOutlined,QqOutlined,WechatOutlined} from '@ant-design/icons'

const Author = () => {
    return (
        <div className="author-div comm-box">
            <div><Avatar size={100} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /></div>
            <div className="author-introduction">
                前端学习路上的小白，即将成为全栈大佬。
                <Divider>社交账号</Divider>
                <Avatar size={28} icon={<GithubOutlined />} className="account" />
                <Avatar size={28} icon={<QqOutlined />} className="account" />
                <Avatar size={28} icon={<WechatOutlined />} className="account" />
            </div>
        </div>
    )
}
export default Author