
import { test, expect } from "@playwright/experimental-ct-react";
import App2924 from "../example/App2924.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2924 />);
  await expect(component).toContainText("Learn React");
});
