import create from 'zustand';
import {TabProps} from './interface';

export const useTabStore = create<TabProps>(set => ({
  currentTab: 'Index',
  setCurrentTab: currentTab => set({currentTab}),
}));
