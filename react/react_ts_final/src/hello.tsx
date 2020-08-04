import * as React from 'react';
// 子组件 
export interface Props {
  useName: string;
}
export const HelloComponent = (props) => (
  <h2>Hello user: { props.userName } </h2>
)