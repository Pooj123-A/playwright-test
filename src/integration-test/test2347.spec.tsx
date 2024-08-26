
import { test, expect } from "@playwright/experimental-ct-react";
import App2347 from "../example/App2347.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2347 />);
  await expect(component).toContainText("Learn React");
});
