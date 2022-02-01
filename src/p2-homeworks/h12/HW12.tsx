import React from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeAC} from "./bll/themeReducer";

const themes = ['dark', 'red', 'some'];

function HW12() {

    const activeTheme = useSelector<AppStoreType, string>(state => state.theme.theme)
    const dispatch = useDispatch()

    const onChangeCallback = (theme: string) => {
      dispatch(changeThemeAC(theme))
    }

    // useDispatch, onChangeCallback

    return (
        <div className={s[activeTheme]}>
            <hr/>
            <span className={s[activeTheme + `-text`]}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <SuperRadio name={'radio'}
                        options={themes}
                        value={activeTheme}
                        onChangeOption={onChangeCallback}/>

            <hr/>
        </div>
    );
}

export default HW12;
