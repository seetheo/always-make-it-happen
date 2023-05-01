// ** React Imports
import { useState, Fragment, ChangeEvent, ReactNode } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Components
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Box, { BoxProps } from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import useMediaQuery from '@mui/material/useMediaQuery'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled, useTheme } from '@mui/material/styles'
import InputAdornment from '@mui/material/InputAdornment'
import Typography, { TypographyProps } from '@mui/material/Typography'
import MuiFormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Hooks
import { useSettings } from 'src/@core/hooks/useSettings'

// ** Demo Imports
import FooterIllustrationsV2 from 'src/views/pages/auth/FooterIllustrationsV2'

interface State {
  password: string
  showPassword: boolean
}

// ** Styled Components
const RegisterIllustrationWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  padding: theme.spacing(20),
  paddingRight: '0 !important',
  [theme.breakpoints.down('lg')]: {
    padding: theme.spacing(10)
  }
}))

const RegisterIllustration = styled('img')(({ theme }) => ({
  maxWidth: '48rem',
  [theme.breakpoints.down('xl')]: {
    maxWidth: '38rem'
  },
  [theme.breakpoints.down('lg')]: {
    maxWidth: '30rem'
  }
}))

const RightWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up('md')]: {
    maxWidth: 400
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: 450
  }
}))

const BoxWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.down('md')]: {
    maxWidth: 400
  }
}))

const TypographyStyled = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontWeight: 600,
  letterSpacing: '0.18px',
  marginBottom: theme.spacing(1.5),
  [theme.breakpoints.down('md')]: { marginTop: theme.spacing(8) }
}))

const FormControlLabel = styled(MuiFormControlLabel)<FormControlLabelProps>(({ theme }) => ({
  marginBottom: theme.spacing(4),
  '& .MuiFormControlLabel-label': {
    fontSize: '0.875rem',
    color: theme.palette.text.secondary
  }
}))

const RegisterV2 = () => {
  // ** States
  const [values, setValues] = useState<State>({
    password: '',
    showPassword: false
  })

  // ** Hooks
  const theme = useTheme()
  const { settings } = useSettings()

  // ** Vars
  const { skin } = settings
  const hidden = useMediaQuery(theme.breakpoints.down('md'))

  const handleChange = (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value })
  }
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const imageSource = skin === 'bordered' ? 'auth-v2-register-illustration-bordered' : 'auth-v2-register-illustration'

  return (
    <Box className='content-right'>
      {!hidden ? (
        <Box sx={{ flex: 1, display: 'flex', position: 'relative', alignItems: 'center', justifyContent: 'center' }}>
          <RegisterIllustrationWrapper>
            <RegisterIllustration
              alt='register-illustration'
              src={`/images/pages/${imageSource}-${theme.palette.mode}.png`}
            />
          </RegisterIllustrationWrapper>
          <FooterIllustrationsV2 image={`/images/pages/auth-v2-register-mask-${theme.palette.mode}.png`} />
        </Box>
      ) : null}
      <RightWrapper sx={skin === 'bordered' && !hidden ? { borderLeft: `1px solid ${theme.palette.divider}` } : {}}>
        <Box
          sx={{
            p: 7,
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'background.paper'
          }}
        >
          <BoxWrapper>
            <Box
              sx={{
                top: 30,
                left: 40,
                display: 'flex',
                position: 'absolute',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <svg xmlns='http://www.w3.org/2000/svg' width={57} height={32} viewBox='0 0 293 277' version='1.1'>
                <path
                  d='M 22.182 101.750 C 19.127 118.035, 19.504 120.552, 26.697 131.949 C 47.695 165.218, 93.140 171.861, 142.799 148.918 C 153.051 144.182, 152.484 143.743, 150.885 155.178 C 144.520 200.695, 156.158 240.157, 180.500 255.597 L 183.500 257.500 179.842 253 C 161.278 230.161, 157.945 186.002, 170.408 127.981 C 172.178 119.741, 173.435 113, 173.202 113 C 172.969 113, 169.115 115.200, 164.639 117.889 C 98.182 157.805, 40.775 151.114, 26.198 101.751 C 24.076 94.566, 23.529 94.566, 22.182 101.750 M 9.452 140.731 C 7.397 165.408, 15.203 197.820, 26.497 211.500 C 27.405 212.600, 27.922 213.033, 27.646 212.461 C 25.068 207.134, 19.017 174.649, 20.354 173.313 C 20.596 173.071, 23.878 174.996, 27.647 177.591 C 48.244 191.771, 81.734 196.822, 111.500 190.237 C 122.218 187.866, 121.063 187.129, 122.055 196.971 C 124.739 223.598, 139.038 248.945, 159.180 262.784 C 164.186 266.224, 166.527 266.561, 171.899 264.619 L 175.298 263.389 170.218 259.660 C 149.057 244.127, 137.918 217.547, 136.308 178.750 C 135.972 170.637, 135.401 164, 135.040 164 C 134.678 164, 130.630 165.370, 126.043 167.044 C 79.731 183.945, 38.390 173.952, 17 140.684 C 10.204 130.114, 10.337 130.114, 9.452 140.731 M 44.531 201.644 C 43.990 205.246, 42.981 207.225, 40.480 209.584 L 37.148 212.726 39.534 217.876 C 45.078 229.841, 56.209 243.541, 65.097 249.336 C 67.597 250.966, 67.872 250.931, 72.427 248.385 C 87.064 240.204, 116.234 247.197, 131.610 262.573 L 138.037 269 144.519 269 C 152.399 269, 152.409 269.515, 144.386 261.833 C 134.186 252.067, 124.154 236.372, 120.080 223.808 C 118.917 220.221, 118.746 220.116, 114.075 220.153 C 104.950 220.223, 97 212.843, 97 204.300 L 97 201.500 80.750 201.423 C 65.686 201.352, 60.438 200.728, 47.875 197.517 C 45.375 196.878, 45.216 197.074, 44.531 201.644'
                  stroke='none'
                  fill='#1e8f56'
                  fill-rule='evenodd'
                />
                <path
                  d='M 135.301 10.180 C 98.657 13.219, 64.684 30.320, 42.936 56.675 L 36.500 64.474 45.745 56.542 C 113.474 -1.572, 211.066 12.465, 255.764 86.751 C 289.600 142.984, 274.743 221.429, 222.364 263.108 C 213.982 269.778, 214.891 270.458, 224.178 264.465 C 343.297 187.595, 277.175 -1.585, 135.301 10.180 M 126.286 38.032 C 92.890 42.232, 60.983 61.816, 43.542 88.819 C 38.148 97.169, 38.178 97.637, 44.773 107.751 C 67.524 142.648, 115.873 136.645, 182.943 90.597 C 197.463 80.628, 196.677 80.667, 193.462 90.081 C 166.788 168.183, 165.972 245.842, 191.722 255.723 C 200.016 258.906, 231.945 228.966, 243.152 207.497 C 286.101 125.217, 218.019 26.494, 126.286 38.032'
                  stroke='none'
                  fill='#1cbc6c'
                  fill-rule='evenodd'
                />
              </svg>
              <Typography variant='h6' sx={{ ml: 2, lineHeight: 1, fontWeight: 700, fontSize: '1.5rem !important' }}>
                {themeConfig.templateName}
              </Typography>
            </Box>
            <Box sx={{ mb: 6 }}>
              <TypographyStyled variant='h5'>Adventure starts here 🚀</TypographyStyled>
              <Typography variant='body2'>Make your app management easy and fun!</Typography>
            </Box>
            <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()}>
              <TextField autoFocus fullWidth id='username' label='Username' sx={{ mb: 4 }} />
              <TextField fullWidth type='email' label='Email' sx={{ mb: 4 }} />
              <FormControl fullWidth>
                <InputLabel htmlFor='auth-register-v2-password'>Password</InputLabel>
                <OutlinedInput
                  label='Password'
                  value={values.password}
                  id='auth-register-v2-password'
                  onChange={handleChange('password')}
                  type={values.showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        edge='end'
                        onClick={handleClickShowPassword}
                        onMouseDown={e => e.preventDefault()}
                        aria-label='toggle password visibility'
                      >
                        <Icon icon={values.showPassword ? 'mdi:eye-outline' : 'mdi:eye-off-outline'} fontSize={20} />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <FormControlLabel
                control={<Checkbox />}
                label={
                  <Fragment>
                    <span>I agree to </span>
                    <Typography
                      href='/'
                      variant='body2'
                      component={Link}
                      onClick={e => e.preventDefault()}
                      sx={{ color: 'primary.main', textDecoration: 'none' }}
                    >
                      privacy policy & terms
                    </Typography>
                  </Fragment>
                }
              />
              <Button fullWidth size='large' type='submit' variant='contained' sx={{ mb: 7 }}>
                Sign up
              </Button>
              <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Typography sx={{ mr: 2, color: 'text.secondary' }}>Already have an account?</Typography>
                <Typography
                  component={Link}
                  href='/pages/auth/login-v2'
                  sx={{ color: 'primary.main', textDecoration: 'none' }}
                >
                  Sign in instead
                </Typography>
              </Box>
              <Divider
                sx={{
                  '& .MuiDivider-wrapper': { px: 4 },
                  mt: theme => `${theme.spacing(5)} !important`,
                  mb: theme => `${theme.spacing(7.5)} !important`
                }}
              >
                or
              </Divider>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <IconButton href='/' component={Link} sx={{ color: '#497ce2' }} onClick={e => e.preventDefault()}>
                  <Icon icon='mdi:facebook' />
                </IconButton>
                <IconButton href='/' component={Link} sx={{ color: '#1da1f2' }} onClick={e => e.preventDefault()}>
                  <Icon icon='mdi:twitter' />
                </IconButton>
                <IconButton
                  href='/'
                  component={Link}
                  onClick={e => e.preventDefault()}
                  sx={{ color: theme => (theme.palette.mode === 'light' ? '#272727' : 'grey.300') }}
                >
                  <Icon icon='mdi:github' />
                </IconButton>
                <IconButton href='/' component={Link} sx={{ color: '#db4437' }} onClick={e => e.preventDefault()}>
                  <Icon icon='mdi:google' />
                </IconButton>
              </Box>
            </form>
          </BoxWrapper>
        </Box>
      </RightWrapper>
    </Box>
  )
}

RegisterV2.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default RegisterV2
