import { useEffect, useState } from "react"
import "./Pagination.css"

function NavItem({ index, content, onClickCB }) {
  let defaultStyle = {
    borderBottom: 'inherit',
  }
  let activeStyle = {
    borderBottom: '2px solid aqua',
  }
  return (
    <div
      className="Nav__navItem"
      onClick={onClickCB}
      style={index === content ? activeStyle : defaultStyle}
    >
      <strong>
        {content}
      </strong>
    </div>
  )
}

export default function Pagination({ pageIndicator, step, setStep, totalSteps }) {
  const [vrender, setVRender] = useState(false)
  useEffect(() => {
    if(Array.isArray(pageIndicator)) {
      setVRender(true)
    }
    console.log(vrender)
  }, [pageIndicator])

  return (
    <div className="Nav__navigation">
      {
        pageIndicator.map((el, i) => {
          let ran = Math.random()
          let kv = `nav_${ran}_${i}`
          return (
            <NavItem 
              index={i}
              content={`${el}`}
              onClickCB={() => {
                if (step > 1) {
                  setStep(step - 1)
                } else if (step < totalSteps) {
                  setStep(step + 1)
                }
                console.log('que raro')
                setStep(p => p)
              }}
              key={kv}
            />
          )
        })
      }
    </div>
  )
}