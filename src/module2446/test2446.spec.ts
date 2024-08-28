
import { test, expect } from "@playwright/experimental-ct-react";
import App2446 from "./App2446.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2446 />);
  await expect(component).toContainText("Learn React");
});
