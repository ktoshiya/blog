import type { NextPage } from 'next'
// import Head from 'next/head'
// import Image from 'next/image'
import { useEffect, useState } from 'react'
import { getUser, getUsers, User } from '@/firebase/users'

const Home: NextPage = () => {
  const [user, setUser] = useState<User>()
  useEffect(() => {
    getUsers().then((users) => {
      console.log(users)
    })

    getUser('kiJneZu2owAj1g9nw18I').then((user) => {
      setUser(user)
    })
  }, [])

  return (
    <>
      <h1 className='text-3xl font-bold underline'>Hello world!</h1>
      <p>{user?.name}</p>
    </>
  )
}

export default Home
