export function usePreviousNonErroredArray<T>(value: T[]) {
  // // The ref object is a generic container whose current property is mutable ...
  // // ... and can hold any value, similar to an instance property on a class
  // const ref = useRef<T[]>();

  // // Store current value in ref
  // useEffect(() => {
  //   if (value.length > 0 && !value.every((el: any) => el.error)) {
  //     ref.current = value;
  //   }
  // }, [value]); // Only re-run if value changes

  // // Return previous value (happens before update in useEffect above)
  return value;
}
