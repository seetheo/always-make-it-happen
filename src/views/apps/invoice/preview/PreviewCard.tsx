// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Table from '@mui/material/Table'
import Divider from '@mui/material/Divider'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import Typography from '@mui/material/Typography'
import Box, { BoxProps } from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import { styled, useTheme } from '@mui/material/styles'
import TableContainer from '@mui/material/TableContainer'
import TableCell, { TableCellBaseProps } from '@mui/material/TableCell'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Types
import { SingleInvoiceType } from 'src/types/apps/invoiceTypes'

interface Props {
  data: SingleInvoiceType
}

const MUITableCell = styled(TableCell)<TableCellBaseProps>(({ theme }) => ({
  borderBottom: 0,
  padding: `${theme.spacing(1, 0)} !important`
}))

const CalcWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '&:not(:last-of-type)': {
    marginBottom: theme.spacing(2)
  }
}))

const PreviewCard = ({ data }: Props) => {
  // ** Hook
  const theme = useTheme()

  if (data) {
    return (
      <Card>
        <CardContent>
          <Grid container>
            <Grid item sm={6} xs={12} sx={{ mb: { sm: 0, xs: 4 } }}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ mb: 6, display: 'flex', alignItems: 'center' }}>
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
                  <Typography variant='h6' sx={{ ml: 2, fontWeight: 700, lineHeight: 1.2 }}>
                    {themeConfig.templateName}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant='body2' sx={{ mb: 1 }}>
                    Office 149, 450 South Brand Brooklyn
                  </Typography>
                  <Typography variant='body2' sx={{ mb: 1 }}>
                    San Diego County, CA 91905, USA
                  </Typography>
                  <Typography variant='body2'>+1 (123) 456 7891, +44 (876) 543 2198</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item sm={6} xs={12}>
              <Box sx={{ display: 'flex', justifyContent: { xs: 'flex-start', sm: 'flex-end' } }}>
                <Table sx={{ maxWidth: '200px' }}>
                  <TableBody>
                    <TableRow>
                      <MUITableCell>
                        <Typography variant='h6'>Invoice</Typography>
                      </MUITableCell>
                      <MUITableCell>
                        <Typography variant='h6'>{`#${data.invoice.id}`}</Typography>
                      </MUITableCell>
                    </TableRow>
                    <TableRow>
                      <MUITableCell>
                        <Typography variant='body2'>Date Issued:</Typography>
                      </MUITableCell>
                      <MUITableCell>
                        <Typography variant='body2'>{data.invoice.issuedDate}</Typography>
                      </MUITableCell>
                    </TableRow>
                    <TableRow>
                      <MUITableCell>
                        <Typography variant='body2'>Date Due:</Typography>
                      </MUITableCell>
                      <MUITableCell>
                        <Typography variant='body2'>{data.invoice.dueDate}</Typography>
                      </MUITableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Box>
            </Grid>
          </Grid>
        </CardContent>

        <Divider
          sx={{ mt: theme => `${theme.spacing(6.5)} !important`, mb: theme => `${theme.spacing(5.5)} !important` }}
        />

        <CardContent>
          <Grid container>
            <Grid item xs={12} sm={6} sx={{ mb: { lg: 0, xs: 4 } }}>
              <Typography variant='subtitle2' sx={{ mb: 3, color: 'text.primary', letterSpacing: '.1px' }}>
                Invoice To:
              </Typography>
              <Typography variant='body2' sx={{ mb: 2 }}>
                {data.invoice.name}
              </Typography>
              <Typography variant='body2' sx={{ mb: 2 }}>
                {data.invoice.company}
              </Typography>
              <Typography variant='body2' sx={{ mb: 2 }}>
                {data.invoice.address}
              </Typography>
              <Typography variant='body2' sx={{ mb: 2 }}>
                {data.invoice.contact}
              </Typography>
              <Typography variant='body2' sx={{ mb: 2 }}>
                {data.invoice.companyEmail}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: ['flex-start', 'flex-end'] }}>
              <div>
                <Typography variant='subtitle2' sx={{ mb: 3, color: 'text.primary', letterSpacing: '.1px' }}>
                  Bill To:
                </Typography>
                <TableContainer>
                  <Table>
                    <TableBody>
                      <TableRow>
                        <MUITableCell>
                          <Typography variant='body2'>Total Due:</Typography>
                        </MUITableCell>
                        <MUITableCell>
                          <Typography variant='body2'>{data.paymentDetails.totalDue}</Typography>
                        </MUITableCell>
                      </TableRow>
                      <TableRow>
                        <MUITableCell>
                          <Typography variant='body2'>Bank name:</Typography>
                        </MUITableCell>
                        <MUITableCell>
                          <Typography variant='body2'>{data.paymentDetails.bankName}</Typography>
                        </MUITableCell>
                      </TableRow>
                      <TableRow>
                        <MUITableCell>
                          <Typography variant='body2'>Country:</Typography>
                        </MUITableCell>
                        <MUITableCell>
                          <Typography variant='body2'>{data.paymentDetails.country}</Typography>
                        </MUITableCell>
                      </TableRow>
                      <TableRow>
                        <MUITableCell>
                          <Typography variant='body2'>IBAN:</Typography>
                        </MUITableCell>
                        <MUITableCell>
                          <Typography variant='body2'>{data.paymentDetails.iban}</Typography>
                        </MUITableCell>
                      </TableRow>
                      <TableRow>
                        <MUITableCell>
                          <Typography variant='body2'>SWIFT code:</Typography>
                        </MUITableCell>
                        <MUITableCell>
                          <Typography variant='body2'>{data.paymentDetails.swiftCode}</Typography>
                        </MUITableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </Grid>
          </Grid>
        </CardContent>

        <Divider sx={{ mt: theme => `${theme.spacing(6.5)} !important`, mb: '0 !important' }} />

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Item</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>hours</TableCell>
                <TableCell>qty</TableCell>
                <TableCell>Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Premium Branding Package</TableCell>
                <TableCell>Branding & Promotion</TableCell>
                <TableCell>48</TableCell>
                <TableCell>1</TableCell>
                <TableCell>$32</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Social Media</TableCell>
                <TableCell>Social media templates</TableCell>
                <TableCell>42</TableCell>
                <TableCell>1</TableCell>
                <TableCell>$28</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Web Design</TableCell>
                <TableCell>Web designing package</TableCell>
                <TableCell>46</TableCell>
                <TableCell>1</TableCell>
                <TableCell>$24</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>SEO</TableCell>
                <TableCell>Search engine optimization</TableCell>
                <TableCell>40</TableCell>
                <TableCell>1</TableCell>
                <TableCell>$22</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <CardContent sx={{ pt: 8 }}>
          <Grid container>
            <Grid item xs={12} sm={7} lg={9} sx={{ order: { sm: 1, xs: 2 } }}>
              <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                <Typography
                  variant='body2'
                  sx={{ mr: 2, color: 'text.primary', fontWeight: 600, letterSpacing: '.25px' }}
                >
                  Salesperson:
                </Typography>
                <Typography variant='body2'>Tommy Shelby</Typography>
              </Box>

              <Typography variant='body2'>Thanks for your business</Typography>
            </Grid>
            <Grid item xs={12} sm={5} lg={3} sx={{ mb: { sm: 0, xs: 4 }, order: { sm: 2, xs: 1 } }}>
              <CalcWrapper>
                <Typography variant='body2'>Subtotal:</Typography>
                <Typography variant='body2' sx={{ color: 'text.primary', letterSpacing: '.25px', fontWeight: 600 }}>
                  $1800
                </Typography>
              </CalcWrapper>
              <CalcWrapper>
                <Typography variant='body2'>Discount:</Typography>
                <Typography variant='body2' sx={{ color: 'text.primary', letterSpacing: '.25px', fontWeight: 600 }}>
                  $28
                </Typography>
              </CalcWrapper>
              <CalcWrapper>
                <Typography variant='body2'>Tax:</Typography>
                <Typography variant='body2' sx={{ color: 'text.primary', letterSpacing: '.25px', fontWeight: 600 }}>
                  21%
                </Typography>
              </CalcWrapper>
              <Divider
                sx={{ mt: theme => `${theme.spacing(5)} !important`, mb: theme => `${theme.spacing(3)} !important` }}
              />
              <CalcWrapper>
                <Typography variant='body2'>Total:</Typography>
                <Typography variant='body2' sx={{ color: 'text.primary', letterSpacing: '.25px', fontWeight: 600 }}>
                  $1690
                </Typography>
              </CalcWrapper>
            </Grid>
          </Grid>
        </CardContent>

        <Divider sx={{ mt: theme => `${theme.spacing(4.5)} !important`, mb: '0 !important' }} />

        <CardContent>
          <Typography variant='subtitle2' sx={{ color: 'text.primary' }}>
            <strong>Note:</strong> It was a pleasure working with you and your team. We hope you will keep us in mind
            for future freelance projects. Thank You!
          </Typography>
        </CardContent>
      </Card>
    )
  } else {
    return null
  }
}

export default PreviewCard
