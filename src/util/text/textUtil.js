// input 입력 시 영문,숫자,_(언더 하이픈)만 입력 가능
function OnlyEngNumUnderbar(e) {
  e.target.value = e.target.value.replace(/[^0-9a-zA-Z_]/, "");
}

//
function spaceToUnderBar(e) {
  e.target.replace(/ /g, "_");
}

// 글자 수 체크
function handleOnInput(el, maxlength) {
  if (el.value.length > maxlength) {
    el.value = el.value.substr(0, maxlength);
  }
}

export { OnlyEngNumUnderbar, spaceToUnderBar, handleOnInput };
