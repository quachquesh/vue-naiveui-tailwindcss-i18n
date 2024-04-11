import { MockHandler } from 'vite-plugin-mock-server'

const prefix = '/api/v1/admin'

export default (): MockHandler[] => [
  {
    pattern: `${prefix}/me`,
    handle: (req, res) => {
      const data = {
        id: 1,
        username: 'admin@demo.com',
        scope: 'admin',
        is_active: 1,
        email_verified_at: '2022-09-21 17:53:22',
        last_login_at: null,
        available_permissions: {
          dashboard: ['index'],
          administrators: ['index', 'update'],
          customers: ['index', 'update'],
          permissions: ['index', 'update'],
          roles: ['index', 'update']
        },
        profile: {
          id: 1,
          account_id: 1,
          firstname: 'Bernardo',
          lastname: 'Johnston',
          avatar: null,
          fullname: 'Johnston Bernardo'
        },
        roles: [
          {
            id: 1,
            name: 'Super Admin',
            guard_name: 'api',
            level: 0,
            created_at: '2022-09-21 17:53:22',
            updated_at: '2022-09-21 17:53:22'
          }
        ]
      }

      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify(data))
    }
  }
]
