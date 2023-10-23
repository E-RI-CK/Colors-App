import { renderHook, waitFor } from "@testing-library/react";
import { useFetchColors } from "../../src/hooks";


describe('useFetchColors Test', () => {
    test('should return a initial state', () => {
        const { result } = renderHook(() => useFetchColors(9, 1));
        const { colors, currentPage } = result.current;

        expect(colors).toEqual([]);
        expect(currentPage).toEqual(1);
    });

    test('should return colors, currentPage = 1 and totalPages = 2 ', async () => {
        const { result } = renderHook(() => useFetchColors(9, 1));
        await waitFor(
            () => expect(result.current.colors.length).toBeGreaterThan(0),
        );

        const { colors, currentPage, totalPages } = result.current;

        expect(colors.length).toBeGreaterThan(0);
        expect(currentPage).toEqual(1);
        expect(totalPages).toEqual(2);
    });
});