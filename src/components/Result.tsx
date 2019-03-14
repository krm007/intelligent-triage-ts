import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import * as React from "react";
import Nav from "../views/Nav";
import { Icon, Tag, Card, Button, List } from "antd-mobile";
import Bg from "../views/Bg";
import { RouteComponentProps } from "react-router-dom";
import { observer, inject } from "mobx-react";
import { BgWordsAndSymptoms } from "../mobx/bgAndSymptoms";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      "& .am-tag-disabled": {
        backgroundColor: "transparent",
        color: "#fbb24c"
      },
      "& .am-card-body": {
        padding: 0
      },
      "& .am-card": {
        paddingBottom: 0
      },
      "& .am-card.am-card-full": {
        border: "1px solid rgb(214,214,214)",
        marginBottom: "10px"
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
    cardStyle: {
      width: "94%",
      minHeight: "80vh",
      position: "absolute",
      top: "180px",
      left: "3%"
    },
    icoImg: {
      width: "20px",
      height: "20px"
    },
    resultDiv: {
      width: "100%",
      display: "flex",
      justifyContent: "flex-start"
    }
  });

interface Iprops extends WithStyles<typeof styles>, RouteComponentProps {
  changeState: BgWordsAndSymptoms;
}
@inject("changeState")
@observer
class Result extends React.Component<Iprops> {
  public componentWillMount(): void {
    this.props.changeState.getResult();
  }

  public componentDidMount(): void {
    window.addEventListener("popstate", state => {
      this.props.history.replace("/");
    });
  }

  public render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Nav iconType={<Icon type="left" />} title={"诊断结果"} />
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
        <div className={classes.cardStyle}>
          {this.props.changeState.resultList
            ? this.props.changeState.resultList.map((el: any, index: any) => {
                return (
                  <Card full={true} key={index}>
                    <Card.Header
                      title={`诊断结果${index + 1}`}
                      thumb={
                        <img
                          src={require("../images/result.png")}
                          className={classes.icoImg}
                        />
                      }
                      style={{ backgroundColor: "rgb(245,245,245)" }}
                    />
                    <Card.Body>
                      <div>
                        <List style={{ backgroundColor: "white" }}>
                          <List.Item>
                            <p style={{ fontSize: "15px" }}>疑似病症</p>
                            <List.Item.Brief
                              style={{ color: "rgb(255,155,55)" }}
                            >
                              {el.entity.name}
                              {el.percent ? (
                                el.percent === 1 ? (
                                  <span style={{ color: "rgb(102,102,102)" }}>
                                    {`（疑似率:${(
                                      el.percent * 90
                                    ).toFixed()}%）`}
                                  </span>
                                ) : (
                                  <span style={{ color: "rgb(102,102,102)" }}>
                                    {`（疑似率:${(
                                      el.percent * 100
                                    ).toFixed()}%）`}
                                  </span>
                                )
                              ) : null}
                            </List.Item.Brief>
                          </List.Item>
                          <List.Item
                            extra={
                              <Button
                                type="primary"
                                size="small"
                                inline={true}
                                style={{ borderRadius: "15px" }}
                              >
                                去挂号
                              </Button>
                            }
                            multipleLine={true}
                          >
                            <p style={{ fontSize: "15px" }}>就诊科室</p>
                            <List.Item.Brief
                              style={{ color: "rgb(255,155,55)" }}
                            >
                              {el.entity.keshiList}
                            </List.Item.Brief>
                          </List.Item>
                        </List>
                      </div>
                    </Card.Body>
                  </Card>
                );
              })
            : null}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Result);
