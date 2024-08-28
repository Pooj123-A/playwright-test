
import { test, expect } from "@playwright/experimental-ct-react";
import App2056 from "./App2056.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2056 />);
  await expect(component).toContainText("Learn React");
});
