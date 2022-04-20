import './index.css'

const TabItem = props => {
  const {eachItem, updateState, isActive} = props
  const {tabId, displayText} = eachItem

  const onTabClick = () => {
    updateState(tabId)
  }

  const res = isActive && 'button-style'

  return (
    <li className="tab-container">
      <button type="button" className={`button ${res}`} onClick={onTabClick}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
