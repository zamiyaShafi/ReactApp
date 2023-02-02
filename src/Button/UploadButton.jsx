import * as React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';

import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function UploadButtons() {
  return (
    <>
    <Stack direction="row" alignItems="center" spacing={2}>
      <Button variant="contained" component="label">
        Upload
        <input hidden accept="image/*" multiple type="file" />
      </Button>
      <IconButton color="primary" aria-label="upload picture" component="label">
        <input hidden accept="image/*" type="file" />
        <PhotoCamera />
      </IconButton>
      {/* button with icons */}
      <Button variant="outlined" startIcon={<DeleteIcon />}>
  Delete
</Button>
<Button variant="contained" endIcon={<SendIcon />}>
  Send
</Button>
{/* adding icon button */}
<IconButton aria-label="delete" sx={{color:"red"}}>
  <DeleteIcon />
</IconButton>
<IconButton aria-label="delete" disabled color="primary">
  <DeleteIcon />
</IconButton>
<IconButton color="secondary" aria-label="add an alarm">
  <AlarmIcon />
</IconButton>
<IconButton color="primary" aria-label="add to shopping cart">
  <AddShoppingCartIcon />
</IconButton>
    </Stack>
    <Stack direction="row" spacing={2}>
      {/* here you can give boolean value also */}
    <LoadingButton loading={false} variant="outlined">
      Submit
    </LoadingButton>
    <LoadingButton loading loadingIndicator="Loading…" variant="outlined">
      Fetch data
    </LoadingButton>
    <LoadingButton
      loading
      loadingPosition="start"
      startIcon={<SaveIcon />}
      variant="outlined"
    >
      Save
    </LoadingButton>
  </Stack>
  </>
  );
}