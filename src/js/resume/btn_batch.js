function changeTxt() {

}

export function BtnBatch({tabid, tab_list}) {
  console.log("tabid:", tab_list);
  const tab_list_changed = changeTxt(tab_list);
  return (
    <div>
      传递数据方式1：
      {tab_list}
    </div>
  )
}

export function BtnBatch2(props) {
  const { tabid2 } = props
  return (
    <div>
      传递数据方式2：
      {tabid2}
    </div>
  )
}