import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import * as React from "react";
import { Icon, NavBar} from "antd-mobile";



const styles = (theme: Theme) =>
  createStyles<"root">({
    root: {}
  });

interface Iprops extends WithStyles<typeof styles> {
    iconType?:any;
    title:string;
    click?:any
}

class Nav extends React.Component<Iprops> {
  public render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <NavBar
          mode="light"
          icon={this.props.iconType}
          onLeftClick={this.props.click}
        >
          {this.props.title}
        </NavBar>
      </div>
    );
  }
}

export default withStyles(styles)(Nav);
