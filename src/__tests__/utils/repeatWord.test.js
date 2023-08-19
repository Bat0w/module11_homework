import { repeatWord  } from "../../utils/repeatWord";

describe ('tests for repeatWord function', () => {
   
    
    it ('should operate correctly with number ', () => {
        expect (repeatWord('one', 3)).toBe('one1, one2, one3, ') // pass
    });
    it ('should operate correctly with number ', () => {
        expect (repeatWord('one', 0)).toBe('') // pass
    });
});