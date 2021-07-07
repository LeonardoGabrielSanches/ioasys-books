import './styles.scss';

export default function Input({ label, type, name, children, ...rest }) {
  return (
    <div className="input-container">
      <div>
        {label}
        <input {...rest} className="input" type={type} name={name} />
      </div>
      {children}
    </div>
  )
}
