import { MockHandler } from 'vite-plugin-mock-server'

const prefix = '/api/v1'

export default (): MockHandler[] => [
  {
    pattern: `${prefix}/login`,
    handle: (req, res) => {
      const data = {
        token_type: 'Bearer',
        expires_in: 120, // 2 minutes
        access_token:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiY2IyZTU4MTA4NGIwZmZkZTdjZmI2MDk2NGQyYTBhNjkzZTcwMjYxOWJkNTlhMTJmMWE5OGMyYmRmMTNiMjAyZGIzNjVhOWE4MGVmY2VlMzQiLCJpYXQiOjE2Nzg4NzQwNTksIm5iZiI6MTY3ODg3NDA1OSwiZXhwIjoxNzEwNDk2NDU5LCJzdWIiOiIxIiwic2NvcGVzIjpbImFkbWluIl19.uyLS3_rl7oWTkr9CLoP6iGVcgh08HCgEpMEsZ2p_vykskoZfe4472NcRYvP2v8Egueb_Xl-QaZeBbHa5LvXQxsa_BZDwML_Di5QMWN2xZovsgEU28hYXPtvzU3WYcWb8vtDdEupEI9eIOd-XIK_TZATo0D6fAi4WCBhBHOpDQeqJb5TIhEvVOP25EOOx_BLB6SnAsBLq0ZFQ4RkNc4kzYWlc4NEHDWITHpTMSkSgx-pf5c4hczX25UneTsYWwzFxf-R2uMRXfJkkJPb1Fiv2ipk7qwLzVk-9Q9QmLNIWVrU80jOXrZ-TY_d_j8FWwP7Paach1vik-76jIllvgDpTIA25iuvHEUYRUEyU6NENKt1DxvZBd8LIrDZes3RbRHIYO8mI_gz9LTAEi2BB6emh3KidmOBhA7eFnABBLOiOdDxhoTExhOKe2qpZbmBDzCbiG46rYEgU-MDZwgSxESPSWXz85bQZA4OwZh-OPOOmBPk-7AZHtdMPm4EkLsVyXJrz_21WrGqILNxI3AlTpL_oPJDL6jppxAM_KYjokcZjVqIGmY6fWpo_lJAMa5XAFNhNslH715s0htv2vhdX-wowVhkVAKC8kYJC3QCzVzTGaeYwKtxPV2VqFNBYXmUxxNqtXOWfZjvE5i3b4KIsOO89i8ZUnHZj2N1Tjn1KhY-J2iQ',
        refresh_token:
          'def502009b248157abac3aaacc8277ef2bb547adddf33529ab6507d808cf320a692098a3d425183f763ded56b85cc6ee1565ee2fa093fe552c76e6b9a4916a97923ca76bdc3a8269fda7c53c8a9c72d0d9fd59a6df09d7a2bc459a957b7eab6f4e0cf5743d3a5037bea5a525d448e757f31ce5d05439b16497ecd800d43a24cd15f1f137fb9a5bb0765069279376e631457b42a7acaa468eba9487f033d00f201a8450820fc27a3d7c4f7969d6ab0fb17982690633583a74d4597157144564c6c64b5026bbe75df6089be36eeaac592b56bd09ee8b3d1832d0a85540255c76a54d2c78a33a4cd86e063a90cb0fa5f1810410d0c30825c08530d94c6b266f532599451336921de636461503de325a56d1062892011c8f885175612f3cfe86e80002ca65af507429edb798f4f048aa7af245845d1cd7f64d7d17dcd70c81232e6e8765e8d5b3a5ea6021c47abf8a6ea79e5d516587ceb116c6f34abf46011ab0979b6be1509b2e2fba'
      }

      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify(data))
    }
  },
  {
    pattern: `${prefix}/refresh-token`,
    handle: (req, res) => {
      console.log('refresh-token')
      const data = {
        token_type: 'Bearer',
        expires_in: 120, // 2 minutes
        access_token:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiY2IyZTU4MTA4NGIwZmZkZTdjZmI2MDk2NGQyYTBhNjkzZTcwMjYxOWJkNTlhMTJmMWE5OGMyYmRmMTNiMjAyZGIzNjVhOWE4MGVmY2VlMzQiLCJpYXQiOjE2Nzg4NzQwNTksIm5iZiI6MTY3ODg3NDA1OSwiZXhwIjoxNzEwNDk2NDU5LCJzdWIiOiIxIiwic2NvcGVzIjpbImFkbWluIl19.uyLS3_rl7oWTkr9CLoP6iGVcgh08HCgEpMEsZ2p_vykskoZfe4472NcRYvP2v8Egueb_Xl-QaZeBbHa5LvXQxsa_BZDwML_Di5QMWN2xZovsgEU28hYXPtvzU3WYcWb8vtDdEupEI9eIOd-XIK_TZATo0D6fAi4WCBhBHOpDQeqJb5TIhEvVOP25EOOx_BLB6SnAsBLq0ZFQ4RkNc4kzYWlc4NEHDWITHpTMSkSgx-pf5c4hczX25UneTsYWwzFxf-R2uMRXfJkkJPb1Fiv2ipk7qwLzVk-9Q9QmLNIWVrU80jOXrZ-TY_d_j8FWwP7Paach1vik-76jIllvgDpTIA25iuvHEUYRUEyU6NENKt1DxvZBd8LIrDZes3RbRHIYO8mI_gz9LTAEi2BB6emh3KidmOBhA7eFnABBLOiOdDxhoTExhOKe2qpZbmBDzCbiG46rYEgU-MDZwgSxESPSWXz85bQZA4OwZh-OPOOmBPk-7AZHtdMPm4EkLsVyXJrz_21WrGqILNxI3AlTpL_oPJDL6jppxAM_KYjokcZjVqIGmY6fWpo_lJAMa5XAFNhNslH715s0htv2vhdX-wowVhkVAKC8kYJC3QCzVzTGaeYwKtxPV2VqFNBYXmUxxNqtXOWfZjvE5i3b4KIsOO89i8ZUnHZj2N1Tjn1KhY-J2iQ',
        refresh_token:
          'def502009b248157abac3aaacc8277ef2bb547adddf33529ab6507d808cf320a692098a3d425183f763ded56b85cc6ee1565ee2fa093fe552c76e6b9a4916a97923ca76bdc3a8269fda7c53c8a9c72d0d9fd59a6df09d7a2bc459a957b7eab6f4e0cf5743d3a5037bea5a525d448e757f31ce5d05439b16497ecd800d43a24cd15f1f137fb9a5bb0765069279376e631457b42a7acaa468eba9487f033d00f201a8450820fc27a3d7c4f7969d6ab0fb17982690633583a74d4597157144564c6c64b5026bbe75df6089be36eeaac592b56bd09ee8b3d1832d0a85540255c76a54d2c78a33a4cd86e063a90cb0fa5f1810410d0c30825c08530d94c6b266f532599451336921de636461503de325a56d1062892011c8f885175612f3cfe86e80002ca65af507429edb798f4f048aa7af245845d1cd7f64d7d17dcd70c81232e6e8765e8d5b3a5ea6021c47abf8a6ea79e5d516587ceb116c6f34abf46011ab0979b6be1509b2e2fba'
      }

      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify(data))
    }
  },
  {
    pattern: `${prefix}/me`,
    handle: (req, res) => {
      const data = {
        id: 1,
        email: 'admin@demo.com'
      }

      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify(data))
    }
  }
]
