// Type definitions for carpenjk__prop-x 3.0
// Project: https://github.com/carpenjk/prop-x
// Definitions by: carpenjk <https://github.com/carpenjk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
//Property types
export type PropSingleValue = any
export type PropArrayValues = PropSingleValue[]
export type PropValues = PropArrayValues | PropSingleValue
export interface PropsObject { [key: string]: PropValues }
export type PropObjectSubset = Record<keyof PropsObject, PropSingleValue>

//Breakpoints
export type BreakpointIndex = string | number
export type Breakpoint = number | string
export type BreakpointValue = number
export type BreakpointsParam = { [key: BreakpointIndex]: Breakpoint } | Array<string | number>
export type Breakpoints = { [key: BreakpointIndex]: BreakpointValue } | BreakpointValue[]

interface BreakpointTheme {
  theme: {
    breakpoints: BreakpointsParam
  }
}

export type BreakpointProps = BreakpointTheme & {
  [key: string]: any
}

//Wind/unwind
export interface WoundProps { [key: string]: PropArrayValues }
export type UnwoundProps = Array<PropsObject>
export interface WindingOptions {
  useNoValue?: boolean,
  noValue?: string | number | boolean | null | undefined
}
export interface WindingConfig {
  defaultValues?: any,
  options?: WindingOptions
}

// function Types
export type NestedFunction<ArgType, ReturnType> = (arg: ArgType, br?: BreakpointIndex) => ReturnType
export type NestedBooleanFunction = NestedFunction<BreakpointProps, boolean>
export type NestedCSSFunction = NestedFunction<BreakpointProps, string>
export type CSSTemplateArgs = [TemplateStringsArray, ...NestedCSSFunction[]]
export type SecondOrderFunction = (props: BreakpointProps) => string
export type TemplateFn = (...args: CSSTemplateArgs) => SecondOrderFunction


//internal
export declare function deriveIndex(br: BreakpointIndex | undefined): number;
export declare function _getVal(v: any, props: BreakpointProps, br: BreakpointIndex): any;
export declare function _getUnitValue(derivedValue: number | string): string;

//core
type SizeValue = number | void;
type SizeWhole = string;
type SizeUnit = string | void;
interface SizeUnitsObj {
  whole: SizeWhole;
  value: SizeValue;
  unit: SizeUnit;
}
type ValUnits = string | string[] | number | number[];
export declare function parseSizeUnits(valUnits: string | number): SizeUnitsObj;
export declare function parseSizeUnits(valUnits: (string | number)[]): SizeUnitsObj[];
export declare function parseAndCalc(vars: string | number | (string | number)[], fn: (vals: SizeValue[]) => number): string;
export declare const getPropIndex: (vals: any, i: number | void) => void | number;
export declare const getIndexedPropValue: <Val>(vals: Val | Val[], i: number) => void | Val;
export declare const inverseProp: (prop: boolean | boolean[]) => boolean | boolean[];
export declare const windProps: (props: UnwoundProps, config?: WindingConfig) => WoundProps;
export declare const unwindProps: (props: PropsObject, config?: WindingConfig) => UnwoundProps;


//breakpoints
export declare const getPxValue: (value: string | number) => BreakpointValue | null;
export declare const getBreakpointPixels: (breakpoints: BreakpointsParam) => Breakpoints;
export declare const toArray: (breakpoints: BreakpointsParam) => BreakpointValue[];
export declare const getUpper: (breakpoints: BreakpointsParam, windowWidth: number) => BreakpointValue;
export declare const getLower: (breakpoints: BreakpointsParam, windowWidth: number) => BreakpointValue;
export declare const getRatio: (breakpoints: BreakpointsParam, windowWidth: number) => number;
export declare const getIndexOfLower: (breakpoints: BreakpointsParam, windowWidth: number) => BreakpointIndex;

//getProp
export declare const getProp: (prop: string) => NestedCSSFunction;

