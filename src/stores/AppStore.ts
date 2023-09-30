import { defineStore } from 'pinia';
import { computed, reactive } from 'vue';

type Store = {
  photo: string | undefined;
};

export const useAppStore = defineStore('app', () => {
  const store = reactive<Store>({
    photo: undefined
  });

  const getPhoto = computed(() => store.photo);

  const setPhoto = (photo: string) => (store.photo = photo);

  return {
    setPhoto,
    getPhoto
  };
});
