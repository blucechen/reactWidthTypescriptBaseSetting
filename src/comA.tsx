import React from 'react';
import {Button} from 'antd';
// import Button from 'antd/lib/button';
// import 'antd/lib/button/style';
import style from './a.module.scss'// 会将嵌套结构的类名扁平化
import './color.scss'
// console.log(style);

const comA = () => (
  <div>
    <h1 className={style.bgRed}>fdsafdsa</h1>
    <h2 className="bgRed">ABC</h2>
    <Button type="primary">aaaaaaaaaaaaaaa</Button>
    {/* <Input placeholder="Basic usage" /> */}
  </div>
)
export default comA