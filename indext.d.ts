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

interface CssProps { [key: string]: string | string[] }

interface BreakpointTheme {
  theme: {
    breakpoints: BreakpointsParam
  }
}

export type BreakpointProps = BreakpointTheme & {
  [key: string]: string | string[]
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