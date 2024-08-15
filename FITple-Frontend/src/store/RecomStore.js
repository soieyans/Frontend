import { create } from 'zustand';

const RecomStore = create((set) => ({
  userData: [],
  itemData: [],
  fetchUsers: () => {
    fetch('/TestData/UserTestData.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log("Fetched user data:", data);
        set({ userData: data });
      })
      .catch(error => {
        console.error("Error fetching user data:", error);
      });

    fetch('/TestData/ItemTestData.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        set({ itemData: data });
      })
      .catch(error => {
        console.error("Error fetching item data:", error);
      });


  },
}));

export default RecomStore;
