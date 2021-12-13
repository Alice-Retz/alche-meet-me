import { createContext, useContext, useState } from 'react'

const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({})
  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [likes, setLikes] = useState([])
  const [motto, setMotto] = useState('')
  const [color, setColor] = useState('')
  const [header, setHeader] = useState('')

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        name,
        setName,
        avatar,
        setAvatar,
        likes,
        setLikes,
        motto,
        setMotto,
        color,
        setColor,
        header,
        setHeader,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

const useUser = () => {
  const context = useContext(UserContext)

  if (context === undefined) {
    throw new Error('Whoops-a-daisy, something went wrong')
  }

  return context
}

export { UserProvider, useUser }
