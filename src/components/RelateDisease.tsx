import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import * as React from "react";
import Nav from "../views/Nav";
import Bg from "../views/Bg";
import { Button, Icon, Tag, WhiteSpace, WingBlank } from "antd-mobile";
import { RouteComponentProps } from "react-router-dom";
import { inject, observer } from "mobx-react";
import { BgWordsAndSymptoms } from "../mobx/bgAndSymptoms";
import { Pathname } from "history";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      "& .am-tag-disabled": {
        backgroundColor: "transparent",
        color: "#fbb24c"
      }
    },
    mpP: {
      fontSize: "17px"
    },
    mySpan: {
      color: "#fbb24c",
      fontSize: "15px"
    },
    bgWords: {
      width: "70%",
      color: "white",
      fontSize: "14px",
      position: "absolute",
      top: "70px",
      left: "5%",
      height: "100px",
      overflow: "auto"
    },
    myMiddleArea: {
      width: "100%",
      minHeight: "80vh",
      position: "absolute",
      left: 0,
      top: "200px",
      backgroundColor: "white"
    },
    subTitle: {
      color: "#888",
      fontsize: "18px",
      padding: "15px 0 9px 15px"
    }
  });

interface Iprops extends WithStyles<typeof styles>, RouteComponentProps {
  changeState: BgWordsAndSymptoms;
}
@inject("changeState")
@observer
class RelateDisease extends React.Component<Iprops> {
  public componentWillMount(): void {
    // console.log(this.props.location.state)
    if (this.props.location.state) {
      this.props.changeState.part = " ";
      this.props.changeState.myData = [];
      this.props.changeState.getPart(this.props.location.state.part);
      this.props.changeState.addData(this.props.location.state.features);
    }
    this.props.changeState.getSymptoms();
  }
  public remove = (array: any[], val: any) => {
    const index = array.indexOf(val);
    if (index > -1) {
      array.splice(index, 1);
    }
  };

  /** 相关病症的tag回调 */
  public relateTagsChange = (selected: boolean, relateTag: any) => {
    // console.log(selected, relateTag);
    if (selected === true) {
      this.props.changeState.addData(relateTag);
    } else if (selected === false) {
      this.remove(this.props.changeState.myData, relateTag);
    }
  };
  public render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Nav
          iconType={<Icon type="left" />}
          title={"智能分诊"}
          click={() => {
            this.props.history.replace("/");
          }}
        />
        {this.props.changeState ? (
          this.props.changeState.myData ? (
            <Bg
              bgWords={classes.bgWords}
              words={
                <div>
                  <p className={classes.mpP}>
                    已选症状&nbsp;:&nbsp;
                    <span className={classes.mySpan}>{`${
                      this.props.changeState.myData.length
                    }个症状`}</span>
                  </p>
                  <br />
                  {this.props.changeState.myData.map((ele: any, i: any) => {
                    return (
                      <Tag
                        key={i}
                        disabled={true}
                        style={{ marginLeft: "9px", marginBottom: "9px" }}
                      >
                        {ele}
                      </Tag>
                    );
                  })}
                </div>
              }
            />
          ) : null
        ) : null}

        <div className={classes.myMiddleArea}>
          <br />

          {this.props.changeState.symptomsList ? (
            <div>
              <div className={classes.subTitle}>相关症状&nbsp;:</div>
              <WingBlank size="lg">
                <div style={{ backgroundColor: "rgb(245,245,249)" }}>
                  {this.props.changeState.symptomsList.map(
                    (item: any, i: any) => {
                      return (
                        <Tag
                          key={i}
                          onChange={(selected: boolean) => {
                            this.relateTagsChange(selected, item);
                          }}
                          style={{
                            marginLeft: "9px",
                            marginBottom: "9px",
                            marginTop: "9px"
                          }}
                        >
                          {item}
                        </Tag>
                      );
                    }
                  )}
                </div>
              </WingBlank>
            </div>
          ) : (
            <div style={{ color: "#888", textAlign: "center" }}>
              暂无相关症状
            </div>
          )}
          <br />
          <WingBlank size="lg">
            <Button
              type="primary"
              size={"small"}
              onClick={() => {
                this.props.history.push({ pathname: "/go" });
              }}
            >
              确定
            </Button>
            <WhiteSpace size="lg" />
          </WingBlank>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(RelateDisease);
