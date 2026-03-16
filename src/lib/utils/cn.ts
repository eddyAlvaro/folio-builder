export const cn = (...args: Array<string | false | undefined | null>) =>
  args.filter(Boolean).join(" ");
