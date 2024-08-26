
import { test, expect } from "@playwright/experimental-ct-react";
import App2349 from "../example/App2349.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2349 />);
  await expect(component).toContainText("Learn React");
});
