
import { test, expect } from "@playwright/experimental-ct-react";
import App2265 from "./App2265.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2265 />);
  await expect(component).toContainText("Learn React");
});
