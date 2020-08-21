// 类型 定义文件 
// 类型声明和业务分开
interface IUser {
    name: string;
    age: number;
}

type IUserInfoFunc = (user: IUser) => string;
const getUserInfo: IUserInfoFunc = (user) => {
    return `name: ${user.name}, age: ${user.age}`
}