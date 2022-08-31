import {Tooltip, IconButton} from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const longText = `
'Countries Info App' was built with react and pulls data from 
two APIs - the restcountries API and the openweathermap API.
Although it's a fairly simple app, I've used it as an opportunity
to explore properly styling the UI. I started in Figma and
worked my design into the HTML and CSS of the app.
Link to the source code is at the right side of the footer.
`

const Header = () => {
  const headerStyle = {
    
  }

  return (
    <div className="header flex-space-between" style={headerStyle}>
      <div>
      <h2>Countries Info App</h2>
      </div>
      
      <Tooltip title={longText} placement="bottom-end">
        <IconButton>
          <HelpOutlineIcon />
        </IconButton>
      </Tooltip>
    </div>
  )
}

export default Header