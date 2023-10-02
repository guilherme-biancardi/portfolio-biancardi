import { defineStore } from 'pinia';
import { computed, reactive } from 'vue';

interface DevInformation {
  name: string;
  email: string;
  medias: {
    instagram: string;
    linkedin: string;
    whatsapp: string;
    github: string;
  };
}

type Store = {
  photos:
    | {
        small: string | undefined;
        large: string | undefined;
      }
    | undefined;
  devInformation: DevInformation;
};

export const useAppStore = defineStore('app', () => {
  const store = reactive<Store>({
    photos: undefined,
    devInformation: {
      name: import.meta.env.VITE_DEV_NAME,
      email: import.meta.env.VITE_DEV_EMAIL,
      medias: {
        github: import.meta.env.VITE_DEV_GITHUB,
        instagram: import.meta.env.VITE_DEV_INSTAGRAM,
        linkedin: import.meta.env.VITE_DEV_LINKEDIN,
        whatsapp: import.meta.env.VITE_DEV_WHATSAPP
      }
    }
  });

  const getPhoto = computed(() => store.photos);
  const getDevInformation = computed(() => store.devInformation);

  const setPhotos = (photos: Store['photos']) => (store.photos = photos);

  return {
    setPhotos,
    getPhoto,
    getDevInformation
  };
});
