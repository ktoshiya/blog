declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test'
    readonly NEXT_PUBLIC_API_KEY: string
    readonly NEXT_PUBLIC_AUTH_DOMAIN: string
    readonly NEXT_PUBLIC_DATABASE_URL: string
    readonly NEXT_PUBLIC_PROJECT_ID: string
    readonly NEXT_PUBLIC_STORAGE_BUCKET: string
    readonly NEXT_PUBLIC_MESSAGING_SENDER_ID: string
    readonly NEXT_PUBLIC_APP_ID: string
    readonly NEXT_PUBLIC_MEASUREMENT_ID: string
    readonly FIREBASE_PRIVATE_KEY: string
    readonly FIREBASE_CLIENT_EMAIL: string
    readonly FIREBASE_AUTH_EMULATOR_HOST: string
    readonly COOKIE_SECRET_CURRENT: string
    readonly COOKIE_SECRET_PREVIOUS: string
  }
}
