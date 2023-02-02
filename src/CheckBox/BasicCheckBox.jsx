import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { pink } from '@mui/material/colors';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Checkboxes() {
  return (
    <div>
      <Checkbox {...label} defaultChecked />
      <Checkbox {...label} />
      <Checkbox {...label} disabled={false} />
      <Checkbox {...label} disabled checked={false} /><br/>
      {/* size */}
      <Checkbox {...label} defaultChecked size="small" />
<Checkbox {...label} defaultChecked />
<Checkbox
  {...label}
  defaultChecked
  sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
/><br/>
{/* color */}
<Checkbox {...label} defaultChecked />
<Checkbox {...label} defaultChecked color="secondary" />
<Checkbox {...label} defaultChecked color="success" />
<Checkbox {...label} defaultChecked color="default" />
<Checkbox
  {...label}
  defaultChecked
  sx={{
    color: pink[800],
    '&.Mui-checked': {
      color: pink[600],
    },
  }}
/><br/>
{/* icons */}
<Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
<Checkbox
  {...label}
  icon={<BookmarkBorderIcon />}
  checkedIcon={<BookmarkIcon />}
/>
<Checkbox {...label} icon={<TwitterIcon/>} checkedIcon={<TwitterIcon/>} />
<Checkbox {...label} icon={<InstagramIcon/>} checkedIcon={<InstagramIcon/>} color="secondary"/>
    </div>
  );
}