import CredentialsProvider from 'next-auth/providers/credentials'
import { randomUUID, randomBytes } from 'crypto'

export const authOptions = {
  /* providers */
  providers: [
    CredentialsProvider({
      id: 'user',
      name: 'User',
      credentials: {
        email: { label: 'メールアドレス', type: 'email', placeholder: 'メールアドレス' },
        password: { label: 'パスワード', type: 'password' },
      },
      async authorize(credentials) {
        const { email, password } = credentials as { email: string; password: string }

        if (!email || !password) {
          return null
        }

        // TODO: ユーザー情報をDBから取得する
        const user = { id: '1', name: 'J Smith', email: 'test@example.com', password: 'password' }

        if (email === user.email && password === user.password) {
          return user
        }

        return null
      },
    }),
  ],

  /* callbacks */
  // 認証成功時の処理
  callbacks: {},

  /* secret */
  secret: process.env.NEXTAUTH_SECRET,

  /* jwt */
  jwt: {
    maxAge: 3 * 24 * 60 * 60, // 3 days
  },

  /* session */
  session: {
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
    generateSessionToken: () => {
      return randomUUID?.() ?? randomBytes(32).toString('hex')
    },
  },
}
