
import { test, expect } from "@playwright/experimental-ct-react";
import App2035 from "./App2035.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2035 />);
  await expect(component).toContainText("Learn React");
});
