import BubbleSort from "../../algorithms/sorting/bubble-sort/BubbleSort";
import CountingSort from "../../algorithms/sorting/counting-sort/CountingSort";
import HeapSort from "../../algorithms/sorting/heap-sort/HeapSort";
import InsertionSort from "../../algorithms/sorting/insertion-sort/InsertionSort";
import MergeSort from "../../algorithms/sorting/merge-sort/MergeSort";
import QuickSort from "../../algorithms/sorting/quick-sort/QuickSort";
import RadixSort from "../../algorithms/sorting/radix-sort/RadixSort";
import SelectionSort from "../../algorithms/sorting/selection-sort/SelectionSort";
import ShellSort from "../../algorithms/sorting/shell-sort/ShellSort";

describe("sort", () => {
  const valuesLengthList = [2000, 4000];
  valuesLengthList.forEach((valuesLength) => {
    describe(`count (${valuesLength})`, () => {
      const testArray = [...Array(valuesLength).keys()];
      testArray.reverse();
      const sortClassesList = [
        BubbleSort,
        CountingSort,
        HeapSort,
        InsertionSort,
        MergeSort,
        QuickSort,
        RadixSort,
        SelectionSort,
        ShellSort,
      ];
      sortClassesList.forEach((sortClass) => {
        const sortInstance = new sortClass();
        it(`${sortClass.name}`, () => {
          sortInstance.sort(testArray);
        });
      });
    })
  })
});
