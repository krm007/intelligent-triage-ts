**创建项目步骤：**

1、参照antd网页版官网中在ts中安装的教程步骤，2019/2/18更新的版本中已支持react-typescript脚手架，所以不用再单独创建；

2、高级配置中最后不设置自定义主题，否则会报less错误，目前尚无解决办法；

3、创建好项目后会提示缺少tslint配置，需要全局安装

    yarn global add tslint
    tslint --init
    yarn add tslint tslint-react tslint-config-prettier
    
  会自动生成tslint.json文件，添加如下：
  
    {
      "defaultSeverity": "error",
      "extends": ["tslint:recommended", "tslint-react", "tslint-config-prettier"],
      "jsRules": {},
      "rules": {
        "no-console": false,
        "jsx-no-lambda": false,
        "ordered-imports": false
      },
      "rulesDirectory": []
    }
    
 至此，配置好tslint文件；
 
 4、参照antd-mobile中规定index.html文件格式，设置按需加载引入，将config-overrides.js中的library库修改；
     
     libraryName: "antd-mobile",
    
**--------------------------------分割线------------------------------**

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
