
import { test, expect } from "@playwright/experimental-ct-react";
import App2947 from "../example/App2947.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2947 />);
  await expect(component).toContainText("Learn React");
});
