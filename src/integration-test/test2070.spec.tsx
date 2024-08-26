
import { test, expect } from "@playwright/experimental-ct-react";
import App2070 from "../example/App2070.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2070 />);
  await expect(component).toContainText("Learn React");
});
