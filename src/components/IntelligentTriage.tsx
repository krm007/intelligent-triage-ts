import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import * as React from "react";
import Bg from "../views/Bg";
import Nav from "../views/Nav";
import MiddleArea from "../views/MiddleArea";
import { BgWordsAndSymptoms } from "../mobx/bgAndSymptoms";
import { observer, inject } from "mobx-react";

const styles = (theme: Theme) =>
  createStyles({
    root: {},
    bgWords: {
      width: "50%",
      height: "20px",
      color: "white",
      fontSize: "14px",
      position: "absolute",
      top: "12vh",
      left: "25%",
      textAlign: "center"
    },
    middleStyle: {
      width: "100%",
      position: "absolute",
      left: 0,
      top: "22vh",
      backgroundColor: "white",
      "& .am-tabs": {
        height: "calc(100%+1%)"
      }
    }
  });

interface Iprops extends WithStyles<typeof styles> {
  changeState?: BgWordsAndSymptoms;
}

@inject("changeState")
@observer
class IntelligentTriage extends React.Component<Iprops> {
  public render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Nav title={"智能分诊"} />
        <Bg bgWords={classes.bgWords} words={"请选择症状"} />
        // @ts-ignore
        <MiddleArea middleStyle={classes.middleStyle} />
      </div>
    );
  }
}

export default withStyles(styles)(IntelligentTriage);
