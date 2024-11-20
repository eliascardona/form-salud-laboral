import { useEffect, useState } from "react"
import "./Pagination.css"

function NavItem({ step, index, content, onClickCB }) {
  return (
    <div
      className="Nav__navItem"
      onClick={onClickCB}
      style={{
        borderBottom:`${step===index+1 ? '2px solid #0d6efd' : '2px solid #6a6a6a'}`,
        color:`${step===index+1 ? '#0d6efd' : '#6a6a6a'}`
      }}
    >
      <strong>
        {content}
      </strong>
    </div>
  )
}

export default function Pagination({ pageIndicator, step, setStep }) {
  return (
    <div className="Nav__navigation">
      {
        pageIndicator.map((el, i) => {
          let ran = Math.random()
          let kv = `nav_${ran}_${i}`
          return (
            <NavItem 
              step={step}
              index={i}
              content={`${el}`}
              onClickCB={() => {
                setStep(i+1)
              }}
              key={kv}
            />
          )
        })
      }
    </div>
  )
}