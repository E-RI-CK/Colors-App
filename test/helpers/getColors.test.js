import { getColors } from "../../src/helpers/getColors";

getColors
describe('getColors Test', () => {
    test('should return colors if enter an specific page', async () => {
        const colors = await getColors(9, 1);
        expect(colors.data.length).toBeGreaterThan(0);
        expect(colors.data[0]).toEqual({
            id: expect.any(Number),
            name: expect.any(String),
            year: expect.any(Number),
            color: expect.any(String),
            pantone_value: expect.any(String)
        });
    });
});