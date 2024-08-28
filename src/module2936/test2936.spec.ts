
import { test, expect } from "@playwright/experimental-ct-react";
import App2936 from "./App2936.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2936 />);
  await expect(component).toContainText("Learn React");
});
