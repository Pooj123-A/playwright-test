
import { test, expect } from "@playwright/experimental-ct-react";
import App330 from "../example/App330.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App330 />);
  await expect(component).toContainText("Learn React");
});
