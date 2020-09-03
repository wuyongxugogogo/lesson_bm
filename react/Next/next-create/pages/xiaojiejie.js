import { withRouter } from 'next/router'
import Link from 'next/link'
import axios from 'axios'

const xiaojiejie = ({ router, list }) => {
    return (
        <>
            <div>{router.query.name} 来了</div>
            <div>{list}</div>
            <Link href="/"><a>返回首页</a></Link>
        </>
    )
}
xiaojiejie.getInitialProps = async () => {
    const promise = new Promise((resolve) => {
        axios('https://www.easy-mock.com/mock/5f50df7ba758c95f67d6ec91/example/xiaojiejie')
            .then(
                (res) => {
                    console.log('远程数据结果：', res)
                    resolve(res.data.data)
                }
            )
    })
    return await promise
}

export default withRouter(xiaojiejie)