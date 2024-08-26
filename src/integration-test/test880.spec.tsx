
import { test, expect } from "@playwright/experimental-ct-react";
import App880 from "../example/App880.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App880 />);
  await expect(component).toContainText("Learn React");
});
