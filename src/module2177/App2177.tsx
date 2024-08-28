
import { test, expect } from "@playwright/experimental-ct-react";
import App2177 from "./App2177.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2177 />);
  await expect(component).toContainText("Learn React");
});
