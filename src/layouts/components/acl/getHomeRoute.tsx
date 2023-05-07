/**
 *  Set Home URL based on User Roles
 */
const getHomeRoute = (role: string) => {
  if (role === 'client') return '/acl'
  else if (role === "super-administrator") return '/super-admin'
  else return '/dashboards/analytics'
}

export default getHomeRoute
