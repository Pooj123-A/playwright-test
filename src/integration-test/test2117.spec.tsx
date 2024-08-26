
import { test, expect } from "@playwright/experimental-ct-react";
import App2117 from "../example/App2117.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2117 />);
  await expect(component).toContainText("Learn React");
});
