
import { test, expect } from "@playwright/experimental-ct-react";
import App2077 from "./App2077.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2077 />);
  await expect(component).toContainText("Learn React");
});
