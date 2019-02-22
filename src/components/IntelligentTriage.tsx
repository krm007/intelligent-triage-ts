import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import * as React from "react";
import { Icon } from "antd-mobile";
import Bg from "../views/Bg";
import Nav from "../views/Nav";
import MiddleArea from "../views/MiddleArea";

const styles = (theme: Theme) =>
  createStyles({
    root: {},
    bgWords: {
      width: "50%",
      height: "20px",
      color: "white",
      fontSize: "14px",
      position: "absolute",
      top: "90px",
      left: "25%",
      textAlign: "center"
    },
    middleStyle: {
      width: "100%",
      position: "absolute",
      left: 0,
      top: "150px",
      backgroundColor: "white"
    }
  });
interface Istate {
    words:any
}
interface Iprops extends WithStyles<typeof styles> {}

class IntelligentTriage extends React.Component<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props);
    this.state = {
      words: "请选择症状"
    };
  }
  public render() {
    const { classes } = this.props;
      return (
      <div className={classes.root}>
        <Nav iconType={<Icon type="cross" />} />
        <Bg bgWords={classes.bgWords} words={this.state.words} />
          // @ts-ignore
        <MiddleArea middleStyle={classes.middleStyle} />
      </div>
    );
  }
}

export default withStyles(styles)(IntelligentTriage);
