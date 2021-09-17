interface IDepartmentTitle {
  name: string
}

const DepartmentTitle = ({ name }: IDepartmentTitle) => {
  const title = document.querySelector(
    '.vtex-rich-text-0-x-wrapper--department-filter-subtitle-text'
  )

  const removeButton = document.createElement('button')

  removeButton.innerText = 'x'
  removeButton.style.color = '#008651'
  removeButton.style.border = '1px solid #008651'
  removeButton.style.borderRadius = '4px'
  removeButton.style.background = 'none'
  removeButton.style.cursor = 'pointer'
  removeButton.style.display = 'flex'
  removeButton.style.alignItems = 'center'
  removeButton.style.justifyContent = 'center'
  removeButton.style.paddingBottom = '4px'
  removeButton.style.paddingRight = '7px'
  removeButton.style.marginLeft = '5px'
  removeButton.style.width = '20px'
  removeButton.style.height = '20px'
  removeButton.style.transition = '0.2s'

  removeButton.onmouseenter = () => {
    removeButton.style.background = '#008651'
    removeButton.style.color = '#fff'
  }

  removeButton.onmouseleave = () => {
    removeButton.style.background = 'none'
    removeButton.style.color = '#008651'
  }

  removeButton.addEventListener('click', () => {
    console.log('oi')
  })

  title.textContent = name
  title.appendChild(removeButton)
}

export default DepartmentTitle
