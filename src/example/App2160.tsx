
import { test, expect } from "@playwright/experimental-ct-react";
import App2160 from "./App2160.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2160 />);
  await expect(component).toContainText("Learn React");
});
