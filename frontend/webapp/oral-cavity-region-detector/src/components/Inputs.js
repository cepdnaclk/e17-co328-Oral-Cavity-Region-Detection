import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useTheme } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


const Password = React.forwardRef(({label, required}, ref)=> {
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
        <FormControl 
        sx={{ 
          marginY: 1 , width: 300 ,
          "& .MuiOutlinedInput-root": {
            "& > fieldset": {
              borderColor: "#0A9396 !important",
              color: "#0A9396 !important"
            }
          }
        }} 
        variant="outlined" >
          <InputLabel htmlFor="outlined-adornment-password"
            sx={{color: "#616161 !important"}}
            size="small"
          >{label}
          
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            inputRef = {ref}
            required={required}
            size="small"
            inputProps={{ maxLength: 128 }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
  );
})



const TextInput = React.forwardRef(({label, required}, ref) =>{
  return (
    <FormControl sx={{ marginY: 1}} variant="outlined">
    <Box
      sx={{
        width: 300,
      }}
    >
      <TextField 
      size="small"
      fullWidth 
      required = {required}
      InputLabelProps={{ required: false, style:{color:"#616161"} }} 
      label = {label} 
      inputRef={ref} 

      sx={{ 
        "& .MuiOutlinedInput-root": {
          "& > fieldset": {
            borderColor: "#0A9396 !important",
            color: "#0A9396 !important"
          }
        }
      }}

      />
    </Box>
   </FormControl>
  );
})

const NumberInput = React.forwardRef(({label, required}, ref) =>{
  return (
    <FormControl sx={{ marginY: 1}} variant="outlined">
    <Box
      sx={{
        width: 150,
        maxWidth: "100%"
      }}
    >
      <TextField 
      size="small"
      fullWidth 
      required = {required}
      InputLabelProps={{ required: false, style:{color:"#616161"} }} 
      label = {label} 
      inputRef={ref} 
      type="number"
      InputProps={{
        inputProps: { 
            max: 100, min: 0 
        }
      }}
      sx={{ 
        "& .MuiOutlinedInput-root": {
          "& > fieldset": {
            borderColor: "#0A9396 !important",
            color: "#0A9396 !important"
          }
        }
      }}

      />
    </Box>
   </FormControl>
  );
})


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

const SelectInput = React.forwardRef(({label, required, options}, ref) =>{
  return (
  <FormControl fullWidth sx={{ marginY: 1}}>
  <InputLabel size="small" id="demo-simple-select-label" sx={{color: "#616161 !important"}}>{label}</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    label={label}
    inputRef={ref}
    required={required}
    MenuProps={MenuProps}
    size="small"
    sx={{ 
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#0A9396 !important",
        color: "#0A9396 !important"
      }
    }}
  >
    {options.map((name) => (
            <MenuItem
              key={name}
              value={name}
            >
              {name}
            </MenuItem>
    ))}
  </Select>
</FormControl>

  );
})


const TextArea = React.forwardRef(({label, required}, ref) =>{

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { marginY: 1, width: 300 },
      }}
      noValidate
      autoComplete="off"
    >
        <TextField
          id="outlined-textarea"
          label={label}
          maxRows={3}
          multiline
          inputRef={ref}
          size="small"
          InputLabelProps={{ required: false, style:{color:"#616161"} }} 

          sx={{ 
            "& .MuiOutlinedInput-root": {
              "& > fieldset": {
                borderColor: "#0A9396 !important",
                color: "#0A9396 !important"
              }
            }
          }}
    
        />
    </Box>
  );
})


export default Password;
export {TextInput, SelectInput, NumberInput, TextArea};