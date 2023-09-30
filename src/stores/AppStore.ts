import { defineStore } from 'pinia';
import { computed, reactive } from 'vue';

type Store = {
  photos:
    | {
        small: string | undefined;
        large: string | undefined;
      }
    | undefined;
};

export const useAppStore = defineStore('app', () => {
  const store = reactive<Store>({
    photos: undefined
  });

  const getPhoto = computed(() => store.photos);

  const setPhotos = (photos: Store['photos']) => (store.photos = photos);

  return {
    setPhotos,
    getPhoto
  };
});
