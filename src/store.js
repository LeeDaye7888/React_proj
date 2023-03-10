import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: { name: "kim", age: 20 },
  reducers: {
    changeName(state, a) {
      state.name += "park";
    },
    increase(state, action) {
      state.age += action.payload;
    },
  },
});

let cart = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addCount(state, action) {
      let nums = state.findIndex((a) => {
        return a.id === action.payload;
      });
      state[nums].count++;
    },
    minusCount(state, action) {
      let nums = state.findIndex((a) => a.id === action.payload);
      if (state[nums].count > 1) state[nums].count--;
    },
    deleteCount(state, action) {
      let nums = state.findIndex((a) => {
        return a.id === action.payload;
      });
      state.splice(nums, 1);
    },
    addItem(state, action) {
      console.log(action);
      console.log(state);
      let nums = state.findIndex((a) => a.id === action.payload.id);
      console.log(nums);
      if (nums === -1) {
        state.push(action.payload);
      }
      else {
        state[nums].count++;
      }
    },
  },
});

let reviewList = createSlice({
  name: "reviewList",
  initialState: [
    "We recommend going to the nearest CHANEL Boutique of your choice where an advisor can help introduce our after sales services. You can contact a Customer Care Advisor either online or by telephone at 1.800.550.0005, 24/7, so that we may assist you. ★★★★★",
    "Please note that merchandise that has been altered, sale items, and markdown items are not returnable. Refunds will be issued in the original form of payment. Please note that cash, debit card, and travelers check purchases will be refunded via check in the mail. ★★★★★",
    "You have 14 days from the date of purchase to return it in the United States. If you do not return the product within the original country of purchase, contact us for more details on our international return policy. ★★★★★",
    "I recommend going to the nearest Boutique of your choice where an advisor can help introduce our after sales services. You can contact a Customer Care Advisor either online or by telephone at 1.800.550.0005, 24/7, so that we may assist you. ★★★★★",
  ],
  reducers: {
    addReview(state, action) {
      state.push(action.payload);
    },
    removeReview(state, action) {
      state.splice(action.payload, 1);
    },
  },
});

export let { changeName, increase } = user.actions;
export let { addCount, addItem, minusCount, deleteCount } = cart.actions;
export let { addReview, removeReview } = reviewList.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
    reviewList: reviewList.reducer,
  },
});
