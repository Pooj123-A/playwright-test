
import { test, expect } from "@playwright/experimental-ct-react";
import App2831 from "../example/App2831.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2831 />);
  await expect(component).toContainText("Learn React");
});
