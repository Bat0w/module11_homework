import { getMonth } from "../../utils/getMonth";


describe('test for getMonth function', () => {
   it('should show name of the month', () => {
      expect(getMonth(1)).toBe('January'); // pass
      expect(getMonth(13)).toBe('Not a month'); // pass
      expect(getMonth(0)).toBe('January'); // fail
   });
})