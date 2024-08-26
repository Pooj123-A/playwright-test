
import { test, expect } from "@playwright/experimental-ct-react";
import App2917 from "../example/App2917.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2917 />);
  await expect(component).toContainText("Learn React");
});
