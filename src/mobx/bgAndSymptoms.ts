import {observable, action, runInAction, computed, toJS} from "mobx";
import service from "../axios/Service";

/** 背景文字和获取相关症状 */
export class BgWordsAndSymptoms {
  /** 相关症状列表 */
  @observable public symptomsList: any;
  /** 已选的tags */
  @observable public myData: any[];
  /** 部位 */
  @observable public part: string;
  /** 结果列表 */
  @observable public resultList: any[];

  constructor() {
    this.symptomsList = [];
    this.myData = [];
    this.part = " ";
    this.resultList = [];
  }

  @action("获取部位") public getPart(title: string) {
    runInAction(() => {
      this.part = title;
    });
    return this.part;
  }

  @action("用户选中的tag数据") public addData(val: any) {
    runInAction(() => {
      this.myData.push(val);
    });
    return this.myData;
  }

  /** 通过头部和病症获取相关症状 */
  @action public getSymptoms() {
    service
      .get("/boco-diagnose/getLinkedFeature", {
        params: { part: this.part, features: this.myData[0] }
      })
      .then((value: any) => {
        runInAction(() => {
          this.symptomsList = value.data.data;
        });
        // console.log(this.symptomsList);
        return this.symptomsList;
      });
  }

  /** 通过头部和所有病症获取结果 */
  @action public getResult() {
    const params: string = this.myData.join(",");
    service
      .get("/boco-diagnose/getDiseaseResult", {
        params: { part: this.part, features: params }
      })
      .then((value: any) => {
        runInAction(() => {
          this.resultList = value.data.data;
        });
        // console.log(toJS(this.resultList));
        return this.resultList;
      });
  }
}
