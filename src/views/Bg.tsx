import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import * as React from "react";

const styles = (theme: Theme) =>
  createStyles({
    root: {},

  });

interface Iprops extends WithStyles<typeof styles> {
    bgWords:any;
    words: any;
}

class Bg extends React.Component<Iprops> {

  public render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <img
          src={require("../images/bg.png")}
          width={"100%"}
          height={"178px"}
        />
        <div className={this.props.bgWords}>{this.props.words}</div>
      </div>
    );
  }
}

export default withStyles(styles)(Bg);
