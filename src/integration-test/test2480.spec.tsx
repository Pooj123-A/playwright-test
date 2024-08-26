
import { test, expect } from "@playwright/experimental-ct-react";
import App2480 from "../example/App2480.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2480 />);
  await expect(component).toContainText("Learn React");
});
