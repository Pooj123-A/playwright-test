
import { test, expect } from "@playwright/experimental-ct-react";
import App357 from "../example/App357.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App357 />);
  await expect(component).toContainText("Learn React");
});
