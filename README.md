# useState

状態の変更を管理。状態の変更がある度に再描画。たとえばtelと言うテキスフィールドに値が入力されるたびに、telの値の出力箇所の再描画が走る。<br>
入力値を保存する事は他の方法でも簡単に出来るが、**変更があると再描画が走る**と言う部分が強調される機能。

# useEffect

監視対象の状態が変化した際に関数を発火させる。

```js
useEffect(()=>{
    const string = JSON.stringify(state)
    localStorage.setItem(APP_KEY,string)
},[state])
```

`state`を監視し変化があれば第一引数の関数が発火する。

# useContext

PropDrilling問題を解決する。`<AppContext.Provider value={{ state,dispatch }}>`の配下コンポーネントでPropをバケツリレーする事なく`state`と`dispatch`を共有出来る。

```js
// Event.js
import React , {useContext} from 'react'
import AppContext from '../contexts/AppContext'
const Event = ({event}) => {
    const {dispatch} = useContext(AppContext)
    ~ 略 ~
```

```js
// AppContext.js
import {createContext} from 'react'
const AppContext = createContext()
export default AppContext
```