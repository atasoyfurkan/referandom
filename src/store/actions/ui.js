import {
  UI_FINISH_LOADING,
  UI_START_LOADING,
  UI_SHOW_TOAST,
  UI_CLOSE_TOAST,
  UI_START_COMMENT_BUTTON,
  UI_STOP_COMMENT_BUTTON,
  UI_START_LOGIN_BUTTON,
  UI_STOP_LOGIN_BUTTON,
  UI_START_REGISTER_BUTTON,
  UI_STOP_REGISTER_BUTTON
} from "./actionTypes";

export const uiFinishLoading = () => {
  return {
    type: UI_FINISH_LOADING
  };
};
export const uiStartLoading = () => {
  return {
    type: UI_START_LOADING
  };
};

export const uiShowToast = (text, variant) => {
  return {
    type: UI_SHOW_TOAST,
    text: text,
    variant: variant
  };
};

export const uiCloseToast = () => {
  return {
    type: UI_CLOSE_TOAST
  };
};

export const uiStartCommentButton = () => {
  return {
    type: UI_START_COMMENT_BUTTON
  };
};
export const uiStopCommentButton = () => {
  return {
    type: UI_STOP_COMMENT_BUTTON
  };
};

export const uiStartLoginButton = () => {
  return {
    type: UI_START_LOGIN_BUTTON
  };
};
export const uiStopLoginButton = () => {
  return {
    type: UI_STOP_LOGIN_BUTTON
  };
};

export const uiStartRegisterButton = () => {
  return {
    type: UI_START_REGISTER_BUTTON
  };
};
export const uiStopRegisterButton = () => {
  return {
    type: UI_STOP_REGISTER_BUTTON
  };
};

export const handleShowToast = (text, variant) => {
  return dispatch => {
    dispatch(uiShowToast(text, variant));
  };
};