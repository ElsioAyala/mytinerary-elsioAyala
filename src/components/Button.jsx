function Button({text, customStyle, icon, padding}) {
  return (
    <button className={`${customStyle} ${padding} bg-primary-color  text-white transition-colors hover:bg-indigo-900 flex items-center`}>
        {icon ? <span className="mr-1">{icon}</span> : null}
        {text}
    </button>
  )
}

export default Button


