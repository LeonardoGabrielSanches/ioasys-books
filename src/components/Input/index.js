import './styles.scss';

export default function Input({ label, type, name, children }) {
  return (
    <div className="input-container">
      <div>
        {label}
        <input className="input" type={type} name={name} />
      </div>
      {children}
    </div>
  )
}
