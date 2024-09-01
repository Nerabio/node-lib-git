declare const sayHello: (name: string) => string;
export default sayHello;

declare module 'lib-git' {
    sayHello: (name: string) => string;
}