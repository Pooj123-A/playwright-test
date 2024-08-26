
import { test, expect } from "@playwright/experimental-ct-react";
import App2817 from "../example/App2817.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2817 />);
  await expect(component).toContainText("Learn React");
});
