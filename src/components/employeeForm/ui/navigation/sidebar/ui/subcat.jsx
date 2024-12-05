import '../styles/navbar.css'

export default function Subcat({ titulo, href, iconName }) {
  return (
    <li>
      <a href="/">
        <ion-icon name={iconName} style={{fontSize: '1em',color:'#333'}}></ion-icon>
        <span style={{color: '#666'}}>
          {titulo}
        </span>
      </a>
    </li>
  )
}
