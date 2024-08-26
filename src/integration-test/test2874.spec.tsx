
import { test, expect } from "@playwright/experimental-ct-react";
import App2874 from "../example/App2874.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2874 />);
  await expect(component).toContainText("Learn React");
});
