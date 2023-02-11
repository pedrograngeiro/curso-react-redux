/*
  <If test={exp}>
    <span>...</span>
    <span>...</span>
  </If>
*/

export default function If(props) {
  if(props.test) {
    return props.children
  } 
    return false
  
  
}