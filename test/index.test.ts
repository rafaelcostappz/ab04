import { soma } from "../src/index";

test("soma dois números corretamente", () => {
	expect(soma(2, 3)).toBe(5);
});
