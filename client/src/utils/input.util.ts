export const onChangeFormInput = (data: string) => {
  if (data.length > 0) {
    return "form-input-2";
  } else {
    return "form-input";
  }
};
