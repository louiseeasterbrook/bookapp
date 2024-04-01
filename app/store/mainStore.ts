import {createContext, useContext} from 'react';
import {types, Instance} from 'mobx-state-tree';

//STORE

export const MainStore = types
  .model('MainStore')
  .props({
    name: types.optional(types.string, 'Louise Easterbrook'),
  })
  .actions(self => ({
    setUserName: (name: string) => {
      self.name = name;
    },
  }));

//ROOT STORE
// for multiple stores
// export const RootStoreModel = types.model('RootStore').props({
//   main: types.optional(MainStore, {}),
// });

export type RootStore = Instance<typeof MainStore>;

//ROOT STORE CONTEXT
const RootStoreContext = createContext<RootStore>({} as RootStore);

export const RootStoreProvider = RootStoreContext.Provider;

export const useStores = () => useContext(RootStoreContext);
