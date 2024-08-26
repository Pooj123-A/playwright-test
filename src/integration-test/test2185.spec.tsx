
import { test, expect } from "@playwright/experimental-ct-react";
import App2185 from "../example/App2185.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2185 />);
  await expect(component).toContainText("Learn React");
});
