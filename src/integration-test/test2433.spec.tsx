
import { test, expect } from "@playwright/experimental-ct-react";
import App2433 from "../example/App2433.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2433 />);
  await expect(component).toContainText("Learn React");
});
