export const isNullOrUndefined: (o: any) => boolean = (o: any): boolean => {
  return o === null || o === undefined;
};

export const isNullOrEmpty: (o: any) => boolean = (o: any): boolean => {
  return isNullOrUndefined(o) || o.length === 0;
};
