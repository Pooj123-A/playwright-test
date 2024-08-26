
import { test, expect } from "@playwright/experimental-ct-react";
import App2621 from "../example/App2621.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2621 />);
  await expect(component).toContainText("Learn React");
});
