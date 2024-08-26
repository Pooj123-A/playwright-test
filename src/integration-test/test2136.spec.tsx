
import { test, expect } from "@playwright/experimental-ct-react";
import App2136 from "../example/App2136.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2136 />);
  await expect(component).toContainText("Learn React");
});
