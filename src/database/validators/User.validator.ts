export const userValidator: Function = (str: string): boolean => {
  return !/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(str);
};

export const passwordValidator: Function = (str: string): boolean => {
  if (
    /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(str) &&
    /[A-Z]/.test(str) &&
    /[a-z]/.test(str)
  ) {
    return true;
  }
  return false;
};
