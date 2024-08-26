
import { test, expect } from "@playwright/experimental-ct-react";
import App2730 from "../example/App2730.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2730 />);
  await expect(component).toContainText("Learn React");
});
