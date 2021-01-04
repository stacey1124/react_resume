import React, { useEffect, useState } from 'react'

function HookTest() {
  //申明一个新的叫做“count”的state变量
  const [count, setCount] = useState(0)
  var countFunc = useState(1);

  //useEffect相当于componentDidMount 和 componentDidUpdate：
  useEffect(() => {
    // 后执行
    console.log("document:", document, count)
    document.title = `已经点击 ${count} 次`
  })

  // 先执行
  console.log("document1:", document, count)
  // document.title = `点击 ${count} 次`//思考在此处也可以执行

  return (
    <div>
      <p>点击+1之后的值：{count}</p>
      <button onClick={() => {setCount(count + 1)}}>点击+1</button>
    </div>
  )
}

export default HookTest;