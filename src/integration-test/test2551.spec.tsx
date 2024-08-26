
import { test, expect } from "@playwright/experimental-ct-react";
import App2551 from "../example/App2551.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2551 />);
  await expect(component).toContainText("Learn React");
});
