import GitHubIcon from '@mui/icons-material/GitHub';

const githubUrl=`https://github.com/beau-haldane/full-stack-open/tree/master/part2/countries`

const Footer = () => {
  const footerStyle = {
    color: '#68947F',
    fontSize: 14
  }

  const centerVertical = {
    display: 'flex',
    alignItems: 'center'
  }

  return (
    <div className="footer flex-space-between" style={footerStyle}>
      <div>
        Designed and Built by Beau Jorgensen
      </div>
      <div>
      <a href={githubUrl} style={centerVertical} target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
        Source code</a>
      </div>
    </div>
  )
}

export default Footer