type Data = { [key: string]: any };
export function template(tpl: string, data: Data): string {
  const newData = data;
  let result = tpl
    .replace(
      /{{for (\w+)}}(.+){{endfor}}/g,
      (word: string, arrName: string, name: string) => {
        return newData[arrName].map((_el: string, i: number) =>
          name.replace(/{{(\w+)}}/, newData[arrName][i])
        );
      }
    )
    .replace(/{{(\w+)}}/g, (word: string, name: string) => newData[name] || "");
  return result;
}
