import { withAuthUser, AuthAction } from 'next-firebase-auth'
import FirebaseAuth from '@/components/FirebaseAuth'

const MyLoader = () => <div>Loading...</div>

const LoginPage = () => {
  return <FirebaseAuth />
}

export default withAuthUser({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
  whenUnauthedBeforeInit: AuthAction.SHOW_LOADER,
  whenUnauthedAfterInit: AuthAction.RENDER,
  LoaderComponent: MyLoader,
})(LoginPage)
