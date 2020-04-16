declare const _default: (options?: {}) => {
    name: string;
    transform: Function;
    watchChange: (id: string) => void;
    generateBundle: (options: Record<string, any>, bundle: any) => void;
};
export default _default;