// ** Type import
import { HorizontalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): HorizontalNavItemsType => {
  return [
    {
      action: 'read',
      subject: 'super-admin',
      title: 'Agent Panel',
      icon: 'mdi:home-outline',
      children: [
        {
          action: 'read',
          subject: 'super-admin',
          title: 'Agents / Sub-agents',
          path: '/super-admin/agents'
        },
        {
          action: 'read',
          subject: 'super-admin',
          title: 'Completed Patients',
          path: '/super-admin/completed-patients'
        }
      ]
    },
    {
      action: 'read',
      subject: 'super-admin',
      title: 'Emailddddd',
      icon: 'mdi:email-outline',
      path: '/apps/email'
    }
  ]
}

export default navigation
