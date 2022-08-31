const Footer = () => {
  const footerStyle = {
    color: '#68947F',
    fontSize: 14
  }

  return (
    <div className="footer flex-space-between" style={footerStyle}>
      <div>
        Designed and Built by Beau Jorgensen
      </div>
      <div>
        <a href="">beaujorgensen.com</a>
      </div>
    </div>
  )
}

export default Footer