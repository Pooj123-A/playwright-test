
import { test, expect } from "@playwright/experimental-ct-react";
import App2304 from "./App2304.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2304 />);
  await expect(component).toContainText("Learn React");
});
