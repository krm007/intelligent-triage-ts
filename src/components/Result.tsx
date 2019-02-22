import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import * as React from "react";
import Bg from "../views/Bg";
import Nav from "../views/Nav";
import { Icon } from "antd-mobile";

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
    }
  });
interface Istate {
  words: any;
}
interface Iprops extends WithStyles<typeof styles> {}

class Result extends React.Component<Iprops,Istate> {
  constructor(props: Iprops) {
    super(props);
    this.state = {
      words:(<span>`您的症状：${Number}个症状`</span>)
    };
  }
  public render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Nav iconType={<Icon type="left" />} />
        <Bg bgWords={classes.bgWords} words={this.state.words} />
      </div>
    );
  }
}

export default withStyles(styles)(Result);
