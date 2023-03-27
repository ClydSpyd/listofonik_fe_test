import { createContext, useState, useContext } from 'react'

interface QueueContextObject {
  queue: QueueData | null,
  setQueue: React.Dispatch<React.SetStateAction<QueueData | null>>
}

const defaultContext: QueueContextObject = {
  queue: [],
  setQueue: (): void => {},
}

const QueueContext = createContext<QueueContextObject>(
  defaultContext)

  interface Props {
    children: React.ReactNode
  }

export const QueueContextProvider = ({children} : Props) => {
  const [ queue, setQueue ] = useState<QueueData|null>(null)

  return (
    <QueueContext.Provider value={{queue, setQueue}}>
      {children}
    </QueueContext.Provider>
  )

}

export const useQueue = (): QueueContextObject => {
  return useContext(QueueContext)
} 