export const useApp = defineStore("app", () => {
  const isAdding = ref(false);

  const changeAddingState = () => console.log("hello");

  return { isAdding, changeAddingState };
});
