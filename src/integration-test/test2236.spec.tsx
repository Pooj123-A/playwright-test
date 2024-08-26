
import { test, expect } from "@playwright/experimental-ct-react";
import App2236 from "../example/App2236.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2236 />);
  await expect(component).toContainText("Learn React");
});
