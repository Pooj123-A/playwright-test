
import { test, expect } from "@playwright/experimental-ct-react";
import App328 from "./App328.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App328 />);
  await expect(component).toContainText("Learn React");
});
