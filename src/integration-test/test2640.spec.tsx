
import { test, expect } from "@playwright/experimental-ct-react";
import App2640 from "../example/App2640.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2640 />);
  await expect(component).toContainText("Learn React");
});
