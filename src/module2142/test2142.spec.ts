
import { test, expect } from "@playwright/experimental-ct-react";
import App2142 from "./App2142.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2142 />);
  await expect(component).toContainText("Learn React");
});
