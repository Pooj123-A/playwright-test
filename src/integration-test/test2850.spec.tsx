
import { test, expect } from "@playwright/experimental-ct-react";
import App2850 from "../example/App2850.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2850 />);
  await expect(component).toContainText("Learn React");
});
