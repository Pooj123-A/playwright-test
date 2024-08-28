
import { test, expect } from "@playwright/experimental-ct-react";
import App398 from "./App398.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App398 />);
  await expect(component).toContainText("Learn React");
});
