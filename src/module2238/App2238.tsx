
import { test, expect } from "@playwright/experimental-ct-react";
import App2238 from "./App2238.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2238 />);
  await expect(component).toContainText("Learn React");
});
