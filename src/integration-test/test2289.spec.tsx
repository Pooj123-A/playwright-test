
import { test, expect } from "@playwright/experimental-ct-react";
import App2289 from "../example/App2289.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2289 />);
  await expect(component).toContainText("Learn React");
});
