export type CellResolverFunction = (item: any, itemIndex?: number) => any;

export type CellResolver = string | CellResolverFunction;
