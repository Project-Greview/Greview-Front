import { atom, atomFamily, selector } from "recoil";

// Login ID
const loginIDInputValue = atom({
  key: "loginID",
  default: "",
});
const loginIDInputValueState = selector({
  key: "setLoginID",
  get: ({get}) => {
    const idText = get(loginIDInputValue);

    return idText.length;
  },
});
// LoginPW
const loginPWInputValue = atom({
  key: "loginPW",
  default: "",
});
const loginPWInputValueState = selector({
  key: "setLoginPW",
  get: ({get}) => {
    const pwText = get(loginPWInputValue);

    return pwText.length;
  },
});

// InputEmail
const inputEmailValue = atom({
  key: "inputEmail",
  default: "",
});
const inputEmailValueState = selector({
  key: "setInputEmail",
  get: ({get}) => {
    const emailText = get(inputEmailValue);

    return emailText.length;
  },
});
// InputPW
const inputPWValue = atom({
  key: "inputPW",
  default: "",
});
const inputPWValueState = selector({
  key: "setInputPW",
  get: ({get}) => {
    const pwText = get(inputPWValue);

    return pwText.length;
  },
});
// InputPWCK
const inputPWCKValue = atom({
  key: "inputPWCK",
  default: "",
});
const inputPWCKValueState = selector({
  key: "setInputPWCK",
  get: ({get}) => {
    const pwckText = get(inputPWCKValue);

    return pwckText.length;
  },
});
// InputTel
const inputTelValue = atom({
  key: "inputTel",
  default: "",
});
const inputTelValueState = selector({
  key: "setInputTel",
  get: ({get}) => {
    const telText = get(inputTelValue);

    return telText.length;
  },
});
// InputName
const inputNameValue = atom({
  key: "inputName",
  default: "",
});
const inputNameValueState = selector({
  key: "setInputName",
  get: ({get}) => {
    const nameText = get(inputNameValue);

    return nameText.length;
  },
});
// InputNickname
const inputNicknameValue = atom({
  key: "inputNickname",
  default: "",
});
const inputNicknameValueState = selector({
  key: "setInputNickname",
  get: ({get}) => {
    const nicknameText = get(inputNicknameValue);

    return nicknameText.length;
  },
});

// ActionLocation
const actionLocationvalue = atom({
  key: "location",
  defalut:"",
});

export {
  loginIDInputValue,
  loginIDInputValueState,
  loginPWInputValue,
  loginPWInputValueState,
  inputEmailValue,
  inputEmailValueState,
  inputPWValue,
  inputPWValueState,
  inputPWCKValue,
  inputPWCKValueState,
  inputTelValue,
  inputTelValueState,
  inputNameValue,
  inputNameValueState,
  inputNicknameValue,
  inputNicknameValueState,
  actionLocationvalue,
}