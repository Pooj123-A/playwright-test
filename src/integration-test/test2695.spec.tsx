
import { test, expect } from "@playwright/experimental-ct-react";
import App2695 from "../example/App2695.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2695 />);
  await expect(component).toContainText("Learn React");
});
