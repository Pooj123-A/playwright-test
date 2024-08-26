
import { test, expect } from "@playwright/experimental-ct-react";
import App2398 from "../example/App2398.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2398 />);
  await expect(component).toContainText("Learn React");
});
