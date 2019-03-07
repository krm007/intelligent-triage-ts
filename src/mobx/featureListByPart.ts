import { observable, action, runInAction, computed } from "mobx";
import service from "../axios/Service";

/** 获取tab标题和tab内容 */
export class MyFeatureList {
  @observable public allList: any[];

  constructor() {
    this.allList = [];
  }

  @action public async getList() {
    service.get("/getFeatureListByPart").then((value: any) => {
      runInAction(() => {
        this.allList = value.data.data;
      });
    });
  }

  /** 获取tab的标题 */
  @computed public get titleList() {
    return this.allList.map((value, index) => {
      return {
        title: value.part
      };
    });
  }
  // /** 获取tab的内容 */
  // @computed public get tabData(){
  //   return this.allList.map((value, index) => {
  //     return value.features
  //   });
  // }
}
