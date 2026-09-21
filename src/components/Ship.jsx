import './Ship.css'

export default function Ship() {
  return (
    <div className="ship" aria-hidden="true">
      <div className="ship__waves-wrap">
        <div className="ship__waves ship__waves--back" />
        <div className="ship__waves ship__waves--front" />
      </div>
      <div className="ship__sail">
        <img className="ship__boat" src="/barco-arirang.png" alt="" />
      </div>
    </div>
  )
}
