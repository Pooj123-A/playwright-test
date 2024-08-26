
import { test, expect } from "@playwright/experimental-ct-react";
import App297 from "../example/App297.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App297 />);
  await expect(component).toContainText("Learn React");
});
