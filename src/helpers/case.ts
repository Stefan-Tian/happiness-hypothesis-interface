// @ts-ignore
export const snakeToCamel = (obj: any): any => {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(snakeToCamel);
  }

  return Object.keys(obj).reduce((acc: any, key: string) => {
    const camelKey = key.replace(/_\w/g, (match) => match[1].toUpperCase());
    const value = obj[key];
    acc[camelKey] = snakeToCamel(value);
    return acc;
  }, {});
};

// @ts-ignore
export const camelToSnake = (obj: any): any => {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(camelToSnake);
  }

  return Object.entries(obj).reduce((acc: any, [key, value]: [string, any]) => {
    const snakeKey = key.replace(
      /[A-Z]/g,
      (match: string) => '_' + match.toLowerCase()
    );
    acc[snakeKey] = camelToSnake(value);
    return acc;
  }, {});
};
