// Write your code here

import './index.css'

const AppItem = props => {
  const {eachapp} = props
  const {appName, imageUrl} = eachapp

  return (
    <li className="app-container">
      <img src={imageUrl} alt={appName} className="app-img" />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
