DataSource = {
  getComments: () => {
    let data = [
      {name: "bb", age: 25 },
      {name: "ff", age: 27 }
    ]
    return data
  },
  getBlogPost: (id) => {
    let data = [
      {id: 1, content: "文章内容1"},
      {id: 2, content: "文章内容2"},
      {id: 3, content: "文章内容3"},
      {id: 4, content: "文章内容4"},
    ]
    let newData = data.filter((item) => {
      return item.id === id
    })    
    return newData
  },
  addChangeListener: (handleChange) => {
    console.log("addChangeListener")
  },
  removeChangeListener: () => {
    console.log("removeChangeListener")
  }

}
