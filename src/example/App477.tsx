
import { test, expect } from "@playwright/experimental-ct-react";
import App477 from "./App477.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App477 />);
  await expect(component).toContainText("Learn React");
});
