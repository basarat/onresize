declare var optimizedResize: {
    on: (callback: any) => {
        dispose: () => void;
    };
    off: (callback: any) => void;
};
export = optimizedResize;
