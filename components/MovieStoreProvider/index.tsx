import { createContext, useContext } from 'react'
import { MovieStore } from '../../stores/MovieStore';

let store: MovieStore;
export const MovieStoreContext = createContext();

export function useStore() {
  const context = useContext(MovieStoreContext)
  if (context === undefined) {
    throw new Error('useStore must be used within StoreProvider')
  }

  return context
}

export function MovieStoreProvider({ children, initialState: initialData }) {
  const store = initializeStore(initialData)

  return <MovieStoreContext.Provider value={store}>{children}</MovieStoreContext.Provider>
}

function initializeStore(initialData = null) {
  const _store = store ?? new MovieStore()

  // If your page has Next.js data fetching methods that use a Mobx store, it will
  // get hydrated here, check `pages/ssg.js` and `pages/ssr.js` for more details
  if (initialData) {
    _store.hydrate(initialData)
  }
  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}
