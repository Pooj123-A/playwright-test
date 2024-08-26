
import { test, expect } from "@playwright/experimental-ct-react";
import App2884 from "./App2884.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2884 />);
  await expect(component).toContainText("Learn React");
});
