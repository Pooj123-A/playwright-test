
import { test, expect } from "@playwright/experimental-ct-react";
import App2367 from "../example/App2367.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2367 />);
  await expect(component).toContainText("Learn React");
});
