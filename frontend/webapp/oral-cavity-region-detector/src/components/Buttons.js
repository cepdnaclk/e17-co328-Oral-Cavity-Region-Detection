import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';


export const MedButton = styled(Button)(() => ({
    color: "#fff",
    backgroundColor: "#0A9396",
    '&:hover': {
      backgroundColor: "#0A9396",
    },
  }));

export const OutlinedButton = styled(Button)(() => ({
  color: "#0A9396",
  borderColor: "#0A9396",
  '&:hover': {
    borderColor: "#0A9396",
  },
}));

const Input = styled('input')({
  display: 'none',
});

export function UploadButtons() {
  return (
      <label htmlFor="icon-button-file">
        <Input accept="image/*" id="icon-button-file" type="file" />
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>
  );
}

export default MedButton