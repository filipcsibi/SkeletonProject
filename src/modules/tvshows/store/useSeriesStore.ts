import {create} from 'zustand';
import {Series} from '../types/series';

export interface SeriesStore {
  series: Series[];
  currentSerie: Series | null;
  getSeries: (series: Series[]) => void;
  setCurrentSerie: (serie: Series) => void;
}

export const useSeriesStore = create<SeriesStore>((set, get) => ({
  series: [],
  currentSerie: null,
  setCurrentSerie: (newSerie: Series) =>
    set((state: SeriesStore) => ({currentSerie: newSerie})),
  getSeries: (arr: Series[]) => set((state: SeriesStore) => ({series: arr})),
}));
