
import { test, expect } from "@playwright/experimental-ct-react";
import App447 from "./App447.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App447 />);
  await expect(component).toContainText("Learn React");
});
