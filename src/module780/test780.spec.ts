
import { test, expect } from "@playwright/experimental-ct-react";
import App780 from "./App780.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App780 />);
  await expect(component).toContainText("Learn React");
});
