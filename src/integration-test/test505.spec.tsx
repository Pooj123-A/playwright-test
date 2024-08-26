
import { test, expect } from "@playwright/experimental-ct-react";
import App505 from "../example/App505.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App505 />);
  await expect(component).toContainText("Learn React");
});
