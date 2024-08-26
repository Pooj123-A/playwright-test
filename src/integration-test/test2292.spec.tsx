
import { test, expect } from "@playwright/experimental-ct-react";
import App2292 from "../example/App2292.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2292 />);
  await expect(component).toContainText("Learn React");
});
