const sortStringMixin = (a: string, b: string): number => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
};

const sortNumberMixin = (a: number, b: number): number => {
    return a - b
};

export { sortStringMixin, sortNumberMixin }