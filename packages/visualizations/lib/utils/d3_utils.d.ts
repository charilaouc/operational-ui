import { Selection } from "d3-selection";
import { Transition } from "d3-transition";
import { Object } from "./typings";
export declare const withD3Element: (func: any) => (datum: any, ...args: any[]) => any;
export declare const transitionIfVisible: (selection: Selection<any, any, any, any>, duration: number) => Selection<any, any, any, any> | Transition<any, any, any, any>;
export declare const onTransitionEnd: (selection: Transition<any, any, any, any>, func?: () => void) => Transition<any, any, any, any>;
export declare const setPathAttributes: (selection: Selection<any, any, any, any> | Transition<any, any, any, any>, attributes: Object<any>, duration?: number, onEnd?: () => void) => void;
export declare const setTextAttributes: (selection: Selection<any, any, any, any> | Transition<any, any, any, any>, attributes: Object<any>, duration?: number, onEnd?: () => void) => void;
export declare const setLineAttributes: (selection: Selection<any, any, any, any> | Transition<any, any, any, any>, attributes: Object<any>, duration?: number) => void;
export declare const setRectAttributes: (selection: Selection<any, any, any, any> | Transition<any, any, any, any>, attributes: any, duration?: number) => void;
