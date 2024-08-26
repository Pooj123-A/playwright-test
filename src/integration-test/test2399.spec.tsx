
import { test, expect } from "@playwright/experimental-ct-react";
import App2399 from "../example/App2399.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2399 />);
  await expect(component).toContainText("Learn React");
});
