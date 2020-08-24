import { withRouter} from 'next/router'
import Link from 'next/link'

const xiaojiejie = ({router}) => {
    return (
        <>
            <div>{router.query.name} 来了</div>
            <Link href="/"><a>返回首页</a></Link>
        </>
    )
}

export default withRouter(xiaojiejie)