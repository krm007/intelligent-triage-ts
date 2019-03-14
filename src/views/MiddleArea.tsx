import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import * as React from "react";
import { WhiteSpace, Tabs, NoticeBar, Tag } from "antd-mobile";
import { observer, inject } from "mobx-react";
import { MyFeatureList } from "../mobx/featureListByPart";
import { BgWordsAndSymptoms } from "../mobx/bgAndSymptoms";
import { RouteComponentProps, withRouter } from "react-router-dom";

const styles = (theme: Theme) =>
  createStyles({
    root: {},
    tagDiv: {
      display: "flex",
      backgroundColor: "#fff",
      paddingTop: "9px",
      flexDirection: "row",
      flexWrap: "wrap"
    }
  });

interface Iprops extends WithStyles<typeof styles>, RouteComponentProps {
  middleStyle: any;
  store: MyFeatureList;
  changeState: BgWordsAndSymptoms;
}

@inject("store", "changeState")
@observer
class MiddleArea extends React.Component<Iprops> {
  // private data = new Array(); /** 所有的数据 */
  // private currentTagsArray = new Array(); /** 当前用户选择的tag */
  public componentWillMount(): void {
    /** 执行mobx中的action
     * 获取所有tab标题和内容
     */
    this.props.store.getList();
  }

  /** 点击tag的回调 */
  public tagsChange = (
    selected: boolean,
    tabTitle: string,
    currentTag: string
  ) => {
    this.props.history.push({
      pathname: "/next",
      state: { part: tabTitle, features: currentTag }
    });
  };

  /** tab的内容区域 */
  public renderContent = (data: any) => {
    return data.map((item: any, index: any) => {
      /** 二维数组-《注意：标签中的数组可以直接渲染（需要增加属性key）》 */
      const doubleArray = () => {
        if (item.features) {
          return item.features.map((ele: any, i: any) => {
            return (
              <Tag
                key={i}
                onChange={(selected: boolean) => {
                  this.tagsChange(selected, item.part, item.features[i]);
                }}
                style={{ marginLeft: "12px", marginBottom: "9px" }}
              >
                {ele}
              </Tag>
            );
          });
        }
      };

      return <div key={index}>{doubleArray()}</div>;
    });
  };

  public render() {
    const { classes } = this.props;
    return (
      <div className={this.props.middleStyle}>
        <WhiteSpace size="lg" />
        <NoticeBar mode="closable">请选择部位和相应的病症</NoticeBar>
        <div
          style={{
            height: "72vh",
            overflow: "scroll",
            WebkitOverflowScrolling: "touch"
          }}
        >
          <WhiteSpace />
          <Tabs
            tabs={this.props.store.titleList}
            tabBarPosition="left"
            tabDirection="vertical"
            renderTabBar={props => <Tabs.DefaultTabBar {...props} />}
          >
            {this.renderContent(this.props.store.allList)}
          </Tabs>
          <WhiteSpace />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(MiddleArea));
