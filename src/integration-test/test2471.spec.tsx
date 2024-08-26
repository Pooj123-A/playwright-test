
import { test, expect } from "@playwright/experimental-ct-react";
import App2471 from "../example/App2471.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2471 />);
  await expect(component).toContainText("Learn React");
});
