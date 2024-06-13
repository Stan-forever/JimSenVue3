import { defineStore, mapState } from "pinia";

interface UserInfo {
  name: string;
  age: number;
}

interface StateType {
  user: UserInfo | null;
  userList: UserInfo[];
  count: number;
}

export const useLearnStore = defineStore({
  id: "learnStore",
  state: (): StateType => {
    return {
      count: 0,
      user: {
        name: "mike",
        age: 20
      },
      userList: [
        { name: "jane", age: 18 },
        { name: "sam", age: 19 },
        { name: "judy", age: 20 }
      ]
    };
  },
  getters: {
    double: state => state.count * 2,
    doublePlusOne(): number {
      return this.double + 1;
    },
    getUserByName: state => {
      return name => state.userList.find(item => item.name === name);
    }
  },
  actions: {
    increment() {
      //   this.count++;
      let target: UserInfo = this.userList.find(item => item.name === "sam");
      target.age += 1;
    }
  }
});
