import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import * as React from "react";
import {
  Button,
  WhiteSpace,
  WingBlank,
  Tabs,
  NoticeBar,
  Tag
} from "antd-mobile";
import { observer, inject } from "mobx-react";
import { MyFeatureList } from "../mobx/featureListByPart";

const styles = (theme: Theme) =>
  createStyles({
    root: {},
    subTitle: {
      color: "#888",
      fontsize: "14px",
      padding: "15px 0 9px 15px"
    }
  });

interface Iprops extends WithStyles<typeof styles> {
  middleStyle: any;
  store: MyFeatureList;
}

@inject("store")
@observer
class MiddleArea extends React.Component<Iprops> {
  public componentWillMount(): void {
    /** 执行mobx中的action */
    this.props.store.getList();
  }

  /** 点击tag的回调 */
  public onChange = (selected: boolean) => {
    console.log(`tag selected: ${selected}`);
  };

  /** tab的内容区域 */
  public renderContent = (data: any) => {
    return data.map((item: any, index: any) => {
      /** 标签中的数组可以直接渲染 */
      const kanglaoshi = () => {
        if (item.features) {
          return item.features.map((ele: any, inde: any) => {
            return (
              <Tag key={inde} onChange={this.onChange} style={{marginLeft:"9px",marginBottom:"9px"}}>
                {ele}
              </Tag>
            );
          });
        }
      };

      return (
        <div
          style={{
            display: "flex",
            backgroundColor: "#fff",
            paddingTop: "9px",
            flexDirection: "row",
            flexWrap: "wrap"
          }}
          key={index}
        >
          {kanglaoshi()}
        </div>
      );
    });
  };

  public render() {
    const { classes } = this.props;
    return (
      <div className={this.props.middleStyle}>
        <WhiteSpace size="lg" />
        <NoticeBar mode="closable">请选择部位和相应的病症</NoticeBar>
        <div style={{ height: "400px" }}>
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
        <div className={classes.subTitle}>相关症状</div>
        <WingBlank>
          <Button type="primary" size={"small"}>
            确定
          </Button>
          <WhiteSpace />
        </WingBlank>
      </div>
    );
  }
}

export default withStyles(styles)(MiddleArea);
