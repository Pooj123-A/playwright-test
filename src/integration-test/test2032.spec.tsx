
import { test, expect } from "@playwright/experimental-ct-react";
import App2032 from "../example/App2032.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2032 />);
  await expect(component).toContainText("Learn React");
});
