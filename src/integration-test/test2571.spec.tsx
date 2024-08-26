
import { test, expect } from "@playwright/experimental-ct-react";
import App2571 from "../example/App2571.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2571 />);
  await expect(component).toContainText("Learn React");
});
