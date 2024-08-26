
import { test, expect } from "@playwright/experimental-ct-react";
import App2803 from "../example/App2803.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2803 />);
  await expect(component).toContainText("Learn React");
});
