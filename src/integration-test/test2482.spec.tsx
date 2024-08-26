
import { test, expect } from "@playwright/experimental-ct-react";
import App2482 from "../example/App2482.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2482 />);
  await expect(component).toContainText("Learn React");
});
