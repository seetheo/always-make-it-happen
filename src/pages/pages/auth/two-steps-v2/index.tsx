// ** React Imports
import { ReactNode, ChangeEvent, useState, KeyboardEvent } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Components
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box, { BoxProps } from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'
import { styled, useTheme } from '@mui/material/styles'
import FormHelperText from '@mui/material/FormHelperText'

// ** Third Party Imports
import Cleave from 'cleave.js/react'
import { useForm, Controller } from 'react-hook-form'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Hooks
import { useSettings } from 'src/@core/hooks/useSettings'

// ** Demo Imports
import FooterIllustrationsV2 from 'src/views/pages/auth/FooterIllustrationsV2'

// ** Custom Styled Component
import CleaveWrapper from 'src/@core/styles/libs/react-cleave'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

// ** Styles
import 'cleave.js/dist/addons/cleave-phone.us'

// ** Styled Components
const TwoStepsIllustrationWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  padding: theme.spacing(20),
  paddingRight: '0 !important',
  [theme.breakpoints.down('lg')]: {
    padding: theme.spacing(10)
  }
}))

const TwoStepsIllustration = styled('img')(({ theme }) => ({
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

const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  marginLeft: theme.spacing(1),
  color: theme.palette.primary.main
}))

const CleaveInput = styled(Cleave)(({ theme }) => ({
  maxWidth: 50,
  textAlign: 'center',
  height: '50px !important',
  fontSize: '150% !important',
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  '&:not(:last-child)': {
    marginRight: theme.spacing(2)
  },
  '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
    margin: 0,
    WebkitAppearance: 'none'
  }
}))

const defaultValues: { [key: string]: string } = {
  val1: '',
  val2: '',
  val3: '',
  val4: '',
  val5: '',
  val6: ''
}
const TwoStepsV2 = () => {
  // ** State
  const [isBackspace, setIsBackspace] = useState<boolean>(false)

  // ** Hooks
  const theme = useTheme()
  const { settings } = useSettings()
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues })

  // ** Vars
  const { skin } = settings
  const hidden = useMediaQuery(theme.breakpoints.down('md'))

  const imageSource = skin === 'bordered' ? 'auth-v2-two-steps-illustration-bordered' : 'auth-v2-two-steps-illustration'

  // ** Vars
  const errorsArray = Object.keys(errors)

  const handleChange = (event: ChangeEvent, onChange: (...event: any[]) => void) => {
    if (!isBackspace) {
      onChange(event)

      // @ts-ignore
      const form = event.target.form
      const index = [...form].indexOf(event.target)
      if (form[index].value && form[index].value.length) {
        form.elements[index + 1].focus()
      }
      event.preventDefault()
    }
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Backspace') {
      setIsBackspace(true)

      // @ts-ignore
      const form = event.target.form
      const index = [...form].indexOf(event.target)
      if (index >= 1) {
        if (!(form[index].value && form[index].value.length)) {
          form.elements[index - 1].focus()
        }
      }
    } else {
      setIsBackspace(false)
    }
  }

  const renderInputs = () => {
    return Object.keys(defaultValues).map((val, index) => (
      <Controller
        key={val}
        name={val}
        control={control}
        rules={{ required: true }}
        render={({ field: { value, onChange } }) => (
          <Box
            type='tel'
            value={value}
            autoFocus={index === 0}
            component={CleaveInput}
            onKeyDown={handleKeyDown}
            onChange={(event: ChangeEvent) => handleChange(event, onChange)}
            options={{ blocks: [1], numeral: true, numeralPositiveOnly: true }}
            sx={{ [theme.breakpoints.down('sm')]: { px: `${theme.spacing(2)} !important` } }}
          />
        )}
      />
    ))
  }

  return (
    <Box className='content-right'>
      {!hidden ? (
        <Box sx={{ flex: 1, display: 'flex', position: 'relative', alignItems: 'center', justifyContent: 'center' }}>
          <TwoStepsIllustrationWrapper>
            <TwoStepsIllustration
              alt='two-steps-illustration'
              src={`/images/pages/${imageSource}-${theme.palette.mode}.png`}
            />
          </TwoStepsIllustrationWrapper>
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
              <svg xmlns='http://www.w3.org/2000/svg' width={69} height={65} viewBox='0 0 293 277' version='1.1'>
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
              <Typography variant='h5' sx={{ mb: 2 }}>
                Two Step Verification 💬
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>
                We sent a verification code to your mobile. Enter the code from the mobile in the field below.
              </Typography>
              <Typography sx={{ mt: 2, fontWeight: 700 }}>******1234</Typography>
            </Box>
            <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>Type your 6 digit security code</Typography>
            <form onSubmit={handleSubmit(() => true)}>
              <CleaveWrapper
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  ...(errorsArray.length && {
                    '& .invalid:focus': {
                      borderColor: theme => `${theme.palette.error.main} !important`,
                      boxShadow: theme => `0 1px 3px 0 ${hexToRGBA(theme.palette.error.main, 0.4)}`
                    }
                  })
                }}
              >
                {renderInputs()}
              </CleaveWrapper>
              {errorsArray.length ? (
                <FormHelperText sx={{ color: 'error.main' }}>Please enter a valid OTP</FormHelperText>
              ) : null}
              <Button fullWidth type='submit' variant='contained' sx={{ mt: 4 }}>
                Verify My Account
              </Button>
            </form>
            <Box sx={{ mt: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography sx={{ color: 'text.secondary' }}>Didn't get the code?</Typography>
              <LinkStyled href='/' onClick={e => e.preventDefault()}>
                Resend
              </LinkStyled>
            </Box>
          </BoxWrapper>
        </Box>
      </RightWrapper>
    </Box>
  )
}

TwoStepsV2.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default TwoStepsV2
