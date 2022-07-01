import 'styled-components';
declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,

        colors: {
            background: string,
            text: string,
            border: string,
            shadow: string,
            checked: string,
            primary: string,
            secondary: string,
        }
    }
}