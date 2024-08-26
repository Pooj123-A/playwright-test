
import { test, expect } from "@playwright/experimental-ct-react";
import App2940 from "./App2940.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2940 />);
  await expect(component).toContainText("Learn React");
});
