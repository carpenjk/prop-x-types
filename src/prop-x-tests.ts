import { Breakpoint, BreakpointIndex, BreakpointProps, Breakpoints, BreakpointsParam, BreakpointTheme, BreakpointValue, getBreakpointPixels, getIndexedPropValue, getIndexOfLower, getLower, getProp, getPropIndex, getPxValue, getRatio, getUpper, inverseProp, parseAndCalc, parseSizeUnits, PropArrayValues, PropObjectSubset, PropSingleValue, PropsObject, PropValues, SizeUnitsObj, SizeValue, SizeWhole, toArray, unwindProps, UnwoundProps, ValUnits, WindingConfig, WindingOptions, windProps, WoundProps } from "./index";

const propSingleValue: PropSingleValue = { supProp: 1 }
const propArrayValues: PropArrayValues = [1, 2, 3, 4] || [propSingleValue, 1, 2]
const propValues: PropValues = propSingleValue || propArrayValues
const propsObject: PropsObject = { prop1: propSingleValue, prop2: propArrayValues }
const propObjectSubset: PropObjectSubset = { prop1: "value" }
const breakpointIndex: BreakpointIndex = 1
const breakpoint: Breakpoint = 800
const breakpointValue: BreakpointValue = breakpoint
const breakpointsObj: BreakpointsParam = { 0: 0, 1: 400, 2: 800 }
const breakpointsArray: BreakpointsParam = [0, 400, 800]
const breakpoints: Breakpoints = { 0: 0, 1: 400, 2: 800 }

const props: BreakpointProps = {
  theme: {
    breakpoints: {
      0: 0,
      1: 400,
      2: 800
    }
  },
  prop1: propsObject
}
const woudProps: WoundProps = { prop1: propArrayValues, prop2: [100] }
const unwoundProps: UnwoundProps = [
  { prop1: propSingleValue, prop2: 100, prop3: 3 },
  { prop1: 2, prop2: 100 }
]

const windingOptions: WindingOptions = {
  useNoValue: false
}
const windingOptions2: WindingOptions = {
  useNoValue: true,
  noValue: null
}
const windingOptions3: WindingOptions = {
  useNoValue: true,
  noValue: false
}
const windingOptions4: WindingOptions = {
  useNoValue: true,
  noValue: 0
}
const windingOptions5: WindingOptions = {
  useNoValue: true,
  noValue: ""
}
const windingOptions6: WindingOptions = {
  useNoValue: true,
  noValue: undefined
}

const windingConfig: WindingConfig = {
  defaultValues: true
}
const windingConfig2: WindingConfig = {
  options: windingOptions
}
const windingConfig3: WindingConfig = {
  defaultValues: true,
  options: windingOptions2
}
const windingConfig4: WindingConfig = {
  defaultValues: true,
  options: windingOptions3
}
const windingConfig5: WindingConfig = {
  defaultValues: true,
  options: windingOptions4
}
const windingConfig6: WindingConfig = {
  defaultValues: true,
  options: windingOptions5
}
const windingConfig7: WindingConfig = {
  defaultValues: true,
  options: windingOptions6
}

const sizeValue: SizeValue = 100
const sizeWhole: SizeWhole = "100px"
const sizeUnit = "px"
const sizeUnitsObj = { whole: sizeWhole, value: sizeValue, unit: sizeUnit }
const valUnit = "100px"
const valUnits = ["100px", "200px", 100]

parseSizeUnits("100px")
parseSizeUnits(100)
parseSizeUnits([100, "100px"])

parseAndCalc(valUnit, val => val[0] ?? 0)
parseAndCalc(valUnits, val => (val[0] ?? 0) + (val[1] ?? 0))

getPropIndex(propArrayValues, 2)
getIndexedPropValue(propArrayValues, 2)
inverseProp([false, true, true])
windProps(unwoundProps)
windProps(unwoundProps, windingConfig)
windProps(unwoundProps, windingConfig2)
windProps(unwoundProps, windingConfig3)
windProps(unwoundProps, windingConfig4)
windProps(unwoundProps, windingConfig5)
windProps(unwoundProps, windingConfig6)
windProps(unwoundProps, windingConfig7)
unwindProps(unwoundProps)
unwindProps(unwoundProps, windingConfig)
unwindProps(unwoundProps, windingConfig2)
unwindProps(unwoundProps, windingConfig3)
unwindProps(unwoundProps, windingConfig4)
unwindProps(unwoundProps, windingConfig5)
unwindProps(unwoundProps, windingConfig6)
unwindProps(unwoundProps, windingConfig7)

getPxValue("100px")
getBreakpointPixels(breakpointsObj)
getBreakpointPixels(breakpointsArray)
toArray(breakpointsObj)
toArray(breakpointsArray)
getUpper(breakpointsObj, 1000)
getUpper(breakpointsArray, 1000)
getLower(breakpointsArray, 1000)
getLower(breakpointsArray, 1000)
getRatio(breakpointsArray, 1000)
getRatio(breakpointsArray, 1000)
getIndexOfLower(breakpointsArray, 1000)
getIndexOfLower(breakpointsArray, 1000)

getProp('prop1')