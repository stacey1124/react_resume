// import Mock from 'mockjs'
import fetchMock from 'fetch-mock'

fetchMock.mock('/treeData/list', function() {
  return {
    code: 0,
    data: [
      {
        title: '简历文件夹1',
        value: '0-0',
        children: [
          {
            title: '简历子文件夹',
            value: '0-0-1',
          },
          {
            title: '简历子文件夹2',
            value: '0-0-2',
          },
        ],
      },
      {
        title: '人才库文件夹',
        value: '0-1',
        children: [
          {
            title: '简历子文件夹',
            value: '0-0-1',
          },
          {
            title: '简历子文件夹2',
            value: '0-0-2',
          },
        ],
      },
    ]
  }
})
